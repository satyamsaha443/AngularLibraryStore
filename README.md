$searchO="OU=people,O=the chubb corporation"
$LDSServer="NAUSP-WAPP0338.aceins.com"
#$filedate=Get-Date -Format "yyyyMMdd"
#add one day to account for job starting day before file delivered.

###\\rtpnas\JAMS\Q\Test\ 
$filedate=(get-date).AddDays(1).ToString("yyyyMMdd")
$extractfile="\\rtpnas\JAMS\Q\Test\LDSUserExtract_"+$filedate+".csv"
#$filedate=Get-Date -Format "MMddyyyy"
$filedate=(get-date).AddDays(1).ToString("MMddyyyy")
# $FTPFileName="LDSUsers_"+$filedate+".csv"

Write-Host "SubmitPath = \\rtpnas\JAMS\Q\Test\NewFold"

$LDSEntries=Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

Remove-Item $extractfile -ErrorAction SilentlyContinue
$lineout='"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"'
Add-Content $extractfile $lineout

ForEach ($LDSEntry in $LDSEntries)
	{
	if ($LDSEntry.name -ne $LDSEntry.racfid)
		{
		if ($LDSEntry.ChubbGUID.Length -ne 32)
			{
			Write-Host "Skipping entry for invalid GUID length $LDSEntry"
			continue
			}
		$MailAlias1=""
		$MailAlias2=""
		$MailAlias3=""
		$MailAlias4=""
		$AliasCount=1
		Foreach ($address in $LDSEntry.proxyAddresses)
	        {
	        $address=$address.ToLower()
            if (($address.IndexOf("smtp") -ne -1) -and ($address.IndexOf("onmicrosoft") -eq -1) -and ($address.IndexOf("notes.chubb.com") -eq -1) -and ($address.IndexOf("exchange.chubb.com") -eq -1) -and ($address.IndexOf("ace-ina.com") -eq -1) -and ($address.IndexOf("cf.chubb.com") -eq -1) )
                {
                $cleanMail=$address.substring(5)
                if ($cleanMail -ne $LDSEntry.mail)
                    {
	                switch ($AliasCount) {
	                    1 {$MailAlias1=$cleanMail;$AliasCount++}
	                    2 {$MailAlias2=$cleanMail;$AliasCount++}
	                    3 {$MailAlias3=$cleanMail;$AliasCount++}
	                    4 {$MailAlias4=$cleanMail;$AliasCount++}
	                    }
					}	                    
                }
	        }
	    
	    $ChangeDate = '{0:yyyy/MM/dd hh:mm:ss}' -f $LDSEntry.modifyTimeStamp
		$lineout='"'+$LDSEntry.chubbguid+'","'+$LDSEntry.name+'","'+$LDSEntry.racfid+'","'+$LDSEntry.cpnumber+'","'+$LDSEntry.mail+'","'+$LDSEntry.givenName+'","'+$LDSEntry.sn+'","'+$LDSEntry.title+'","'+$LDSEntry.telephonenumber+'","'+$ChangeDate+'","'+$MailAlias1+'","'+$MailAlias2+'","'+$MailAlias3+'","'+$MailAlias4+'"'
		Add-Content $extractfile $lineout
		}
	}

#Parse file for duplicate GUIDS
Write-Host "Starting load of extract"
$LDSEntries2=Import-csv $extractfile
#$LDSEntries2|FT
$LastGUID=$null
$LastLastname=$null

Write-Host "Sorting Records"
$LDSEntries=$LDSEntries2|sort ChubbGUID
#$LDSEntries|FT

Remove-Item $extractfile -ErrorAction SilentlyContinue
$lineout='"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"'
Add-Content $extractfile $lineout

ForEach ($LDSEntry in $LDSEntries)
	{
	if ($LDSEntry.ChubbGUID -eq $LastGUID)
		{
		If ($LDSEntry.LastName -ne $LastLastname)
			{
			Write-Host "Multiple GUID encountered with different last name" $LDSEntry
			}
		}
	else
		{
		$lineout='"'+$LDSEntry.ChubbGUID+'","'+$LDSEntry.ACEINSID+'","'+$LDSEntry.RACFID+'","'+$LDSEntry.CPNumber+'","'+$LDSEntry.Mail+'","'+$LDSEntry.FirstName+'","'+$LDSEntry.LastName+'","'+$LDSEntry.Title+'","'+$LDSEntry.PhoneNumber+'","'+$LDSEntry.LastModified+'","'+$LDSEntry.MailAlias1+'","'+$LDSEntry.MailAlias2+'","'+$LDSEntry.MailAlias3+'","'+$LDSEntry.MailAlias4+'"'
		Add-Content $extractfile $lineout
		$LastGUID=$LDSEntry.ChubbGUID
		$LastMail=$LDSEntry.mail
		}
	}	

# if ("<<CopyExtract>>" -eq "Y")
# 	{
# 	Try
# 		{
# 		Copy-Item $extractfile "<<FileDrop>>"
# 		}
# 	catch
# 		{
# 		Write-Host "Copy of extract file $extractfile to <<FileDrop>> failed." $Error[0]
# 		}
# 	}
	
# if ("<<FTPExtract>>" -eq "Y")
# 	{
# 	try
# 		{
# 		$FTPDIR = "<<FTPDIR>>"
# 		$submitResult=Submit-JAMSEntry "<<SubmitPath>>FTPLDSExtract" -UseVariable
# 		}
# 	catch
# 		{
# 		Write-Host "Submit of extract FTP for $extractfile failed." $Error[0]
# 		}
# 	}


# $searchO="OU=people,O=the chubb corporation"
# $LDSServer="NAUSP-WAPP0338.aceins.com"
# #$filedate=Get-Date -Format "yyyyMMdd"
# #add one day to account for job starting day before file delivered.

# ###\\rtpnas\JAMS\Q\Test\ 
# $filedate=(get-date).AddDays(1).ToString("yyyyMMdd")
# $extractfile="\\rtpnas\JAMS\Q\Test\LDSUserExtract_"+$filedate+".csv"
# #$filedate=Get-Date -Format "MMddyyyy"
# $filedate=(get-date).AddDays(1).ToString("MMddyyyy")
# # $FTPFileName="LDSUsers_"+$filedate+".csv"

# Write-Host "SubmitPath = \\rtpnas\JAMS\Q\Test\NewFold"

# $LDSEntries=Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

# Remove-Item $extractfile -ErrorAction SilentlyContinue
# $lineout='"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"'
# Add-Content $extractfile $lineout

# ForEach ($LDSEntry in $LDSEntries)
# 	{
# 	if ($LDSEntry.name -ne $LDSEntry.racfid)
# 		{
# 		if ($LDSEntry.ChubbGUID.Length -ne 32)
# 			{
# 			Write-Host "Skipping entry for invalid GUID length $LDSEntry"
# 			continue
# 			}
# 		$MailAlias1=""
# 		$MailAlias2=""
# 		$MailAlias3=""
# 		$MailAlias4=""
# 		$AliasCount=1
# 		Foreach ($address in $LDSEntry.proxyAddresses)
# 	        {
# 	        $address=$address.ToLower()
#             if (($address.IndexOf("smtp") -ne -1) -and ($address.IndexOf("onmicrosoft") -eq -1) -and ($address.IndexOf("notes.chubb.com") -eq -1) -and ($address.IndexOf("exchange.chubb.com") -eq -1) -and ($address.IndexOf("ace-ina.com") -eq -1) -and ($address.IndexOf("cf.chubb.com") -eq -1) )
#                 {
#                 $cleanMail=$address.substring(5)
#                 if ($cleanMail -ne $LDSEntry.mail)
#                     {
# 	                switch ($AliasCount) {
# 	                    1 {$MailAlias1=$cleanMail;$AliasCount++}
# 	                    2 {$MailAlias2=$cleanMail;$AliasCount++}
# 	                    3 {$MailAlias3=$cleanMail;$AliasCount++}
# 	                    4 {$MailAlias4=$cleanMail;$AliasCount++}
# 	                    }
# 					}	                    
#                 }
# 	        }
	    
# 	    $ChangeDate = '{0:yyyy/MM/dd hh:mm:ss}' -f $LDSEntry.modifyTimeStamp
# 		$lineout='"'+$LDSEntry.chubbguid+'","'+$LDSEntry.name+'","'+$LDSEntry.racfid+'","'+$LDSEntry.cpnumber+'","'+$LDSEntry.mail+'","'+$LDSEntry.givenName+'","'+$LDSEntry.sn+'","'+$LDSEntry.title+'","'+$LDSEntry.telephonenumber+'","'+$ChangeDate+'","'+$MailAlias1+'","'+$MailAlias2+'","'+$MailAlias3+'","'+$MailAlias4+'"'
# 		Add-Content $extractfile $lineout
# 		}
# 	}

# #Parse file for duplicate GUIDS
# Write-Host "Starting load of extract"
# $LDSEntries2=Import-csv $extractfile
# #$LDSEntries2|FT
# $LastGUID=$null
# $LastLastname=$null

# Write-Host "Sorting Records"
# $LDSEntries=$LDSEntries2|sort ChubbGUID
# #$LDSEntries|FT

# Remove-Item $extractfile -ErrorAction SilentlyContinue
# $lineout='"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"'
# Add-Content $extractfile $lineout

# ForEach ($LDSEntry in $LDSEntries)
# 	{
# 	if ($LDSEntry.ChubbGUID -eq $LastGUID)
# 		{
# 		If ($LDSEntry.LastName -ne $LastLastname)
# 			{
# 			Write-Host "Multiple GUID encountered with different last name" $LDSEntry
# 			}
# 		}
# 	else
# 		{
# 		$lineout='"'+$LDSEntry.ChubbGUID+'","'+$LDSEntry.ACEINSID+'","'+$LDSEntry.RACFID+'","'+$LDSEntry.CPNumber+'","'+$LDSEntry.Mail+'","'+$LDSEntry.FirstName+'","'+$LDSEntry.LastName+'","'+$LDSEntry.Title+'","'+$LDSEntry.PhoneNumber+'","'+$LDSEntry.LastModified+'","'+$LDSEntry.MailAlias1+'","'+$LDSEntry.MailAlias2+'","'+$LDSEntry.MailAlias3+'","'+$LDSEntry.MailAlias4+'"'
# 		Add-Content $extractfile $lineout
# 		$LastGUID=$LDSEntry.ChubbGUID
# 		$LastMail=$LDSEntry.mail
# 		}
# 	}	
