# ... (Previous code)

# Fetch only necessary attributes from AD
$LDSEntries = Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

# Simplify date formatting
$filedate = (Get-Date).AddDays(1).ToString("yyyyMMdd")
$extractfile = "\\rtpnas\JAMS\Q\Test\LDSUserExtract_$filedate.csv"

# Use StringBuilder for CSV operations
$csvContent = New-Object Text.StringBuilder
$csvContent.AppendLine('"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"')

foreach ($LDSEntry in $LDSEntries) {
    # ... (Previous code to process entries and build $lineout)
    $csvContent.AppendLine($lineout)
}

# Write content to the file
$csvContent.ToString() | Set-Content -Path $extractfile

# ... (Rest of the code)





# Fetch only necessary attributes from AD
$LDSEntries = Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

# Simplify date formatting
$filedate = (Get-Date).AddDays(1).ToString("yyyyMMdd")
$extractfile = "\\rtpnas\JAMS\Q\Test\LDSUserExtract_$filedate.csv"

# Use StringBuilder for CSV operations
$csvContent = New-Object Text.StringBuilder
$csvContent.AppendLine('"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"')

foreach ($LDSEntry in $LDSEntries) {
    # Skip entries with invalid GUID length
    if ($LDSEntry.ChubbGUID.Length -ne 32) {
        Write-Host "Skipping entry for invalid GUID length $($LDSEntry.ChubbGUID)"
        continue
    }

    $MailAliases = @($null) * 4
    $AliasCount = 0

    foreach ($address in $LDSEntry.proxyAddresses) {
        $address = $address.ToLower()
        if ($address -match '^smtp:(.+)' -and $matches[1] -ne $LDSEntry.mail -and $address -notmatch 'onmicrosoft|notes\.chubb\.com|exchange\.chubb\.com|ace-ina\.com|cf\.chubb\.com') {
            $MailAliases[$AliasCount++] = $matches[1]

            if ($AliasCount -eq 4) {
                break
            }
        }
    }

    $ChangeDate = Get-Date $LDSEntry.modifyTimeStamp -Format 'yyyy/MM/dd hh:mm:ss'
    $lineout = ('"{0}","{1}","{2}","{3}","{4}","{5}","{6}","{7}","{8}","{9}","{10}","{11}","{12}","{13}"' -f
        $LDSEntry.chubbguid, $LDSEntry.name, $LDSEntry.racfid, $LDSEntry.cpnumber, $LDSEntry.mail, $LDSEntry.givenName,
        $LDSEntry.sn, $LDSEntry.title, $LDSEntry.telephonenumber, $ChangeDate, $MailAliases[0], $MailAliases[1],
        $MailAliases[2], $MailAliases[3])

    $csvContent.AppendLine($lineout)
}

# Write content to the file
$csvContent.ToString() | Set-Content -Path $extractfile

# Continue with the rest of the code...





# Function to process an individual LDSEntry
function Process-LDSEntry {
    param ($LDSEntry)

    # Skip entries with invalid GUID length
    if ($LDSEntry.ChubbGUID.Length -ne 32) {
        Write-Host "Skipping entry for invalid GUID length $($LDSEntry.ChubbGUID)"
        return
    }

    $MailAliases = @($null) * 4
    $AliasCount = 0

    foreach ($address in $LDSEntry.proxyAddresses) {
        $address = $address.ToLower()
        if ($address -match '^smtp:(.+)' -and $matches[1] -ne $LDSEntry.mail -and $address -notmatch 'onmicrosoft|notes\.chubb\.com|exchange\.chubb\.com|ace-ina\.com|cf\.chubb\.com') {
            $MailAliases[$AliasCount++] = $matches[1]

            if ($AliasCount -eq 4) {
                break
            }
        }
    }

    $ChangeDate = Get-Date $LDSEntry.modifyTimeStamp -Format 'yyyy/MM/dd hh:mm:ss'
    $lineout = ('"{0}","{1}","{2}","{3}","{4}","{5}","{6}","{7}","{8}","{9}","{10}","{11}","{12}","{13}"' -f
        $LDSEntry.chubbguid, $LDSEntry.name, $LDSEntry.racfid, $LDSEntry.cpnumber, $LDSEntry.mail, $LDSEntry.givenName,
        $LDSEntry.sn, $LDSEntry.title, $LDSEntry.telephonenumber, $ChangeDate, $MailAliases[0], $MailAliases[1],
        $MailAliases[2], $MailAliases[3])

    return $lineout
}

# Fetch only necessary attributes from AD
$LDSEntries = Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

# Simplify date formatting
$filedate = (Get-Date).AddDays(1).ToString("yyyyMMdd")
$extractfile = "\\rtpnas\JAMS\Q\Test\LDSUserExtract_$filedate.csv"

# Use StringBuilder for CSV operations
$csvContent = New-Object Text.StringBuilder
$csvContent.AppendLine('"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"')

# Process LDSEntries in parallel
$LDSEntries | ForEach-Object {
    $job = Start-Job -ScriptBlock {
        param ($LDSEntry)
        Process-LDSEntry $LDSEntry
    } -ArgumentList $_

    $jobs += $job
}

# Wait for all jobs to complete
$jobs | Wait-Job | Receive-Job | ForEach-Object {
    if ($_ -ne $null) {
        $csvContent.AppendLine($_)
    }
}

# Write content to the file
$csvContent.ToString() | Set-Content -Path $extractfile

# Continue with the rest of the code...






# Function to process an individual LDSEntry
function Process-LDSEntry {
    param ($LDSEntry)

    # Skip entries with invalid GUID length
    if ($LDSEntry.ChubbGUID.Length -ne 32) {
        Write-Host "Skipping entry for invalid GUID length $($LDSEntry.ChubbGUID)"
        return
    }

    $MailAliases = @($null) * 4
    $AliasCount = 0

    foreach ($address in $LDSEntry.proxyAddresses) {
        $address = $address.ToLower()
        if ($address -match '^smtp:(.+)' -and $matches[1] -ne $LDSEntry.mail -and $address -notmatch 'onmicrosoft|notes\.chubb\.com|exchange\.chubb\.com|ace-ina\.com|cf\.chubb\.com') {
            $MailAliases[$AliasCount++] = $matches[1]

            if ($AliasCount -eq 4) {
                break
            }
        }
    }

    $ChangeDate = Get-Date $LDSEntry.modifyTimeStamp -Format 'yyyy/MM/dd hh:mm:ss'
    $lineout = ('"{0}","{1}","{2}","{3}","{4}","{5}","{6}","{7}","{8}","{9}","{10}","{11}","{12}","{13}"' -f
        $LDSEntry.chubbguid, $LDSEntry.name, $LDSEntry.racfid, $LDSEntry.cpnumber, $LDSEntry.mail, $LDSEntry.givenName,
        $LDSEntry.sn, $LDSEntry.title, $LDSEntry.telephonenumber, $ChangeDate, $MailAliases[0], $MailAliases[1],
        $MailAliases[2], $MailAliases[3])

    return $lineout
}

# Fetch only necessary attributes from AD
$LDSEntries = Get-ADObject -LDAPFilter "(objectClass=userProxyFull)" -Properties chubbguid,name,mail,cpnumber,givenName,sn,racfid,title,telephonenumber,modifyTimeStamp,proxyAddresses,'msDS-PrincipalName' -searchbase $searchO -Server $LDSServer

# Simplify date formatting
$filedate = (Get-Date).AddDays(1).ToString("yyyyMMdd")
$extractfile = "\\rtpnas\JAMS\Q\Test\LDSUserExtract_$filedate.csv"

# Use StringBuilder for CSV operations
$csvContent = New-Object Text.StringBuilder
$csvContent.AppendLine('"ChubbGUID","ACEINSID","RACFID","CPNumber","Mail","FirstName","LastName","Title","PhoneNumber","LastModified","MailAlias1","MailAlias2","MailAlias3","MailAlias4"')

# Process LDSEntries in parallel
$jobs = @()
$LDSEntries | ForEach-Object {
    $job = Start-Job -ScriptBlock {
        param ($LDSEntry)
        Process-LDSEntry $LDSEntry
    } -ArgumentList $_

    $jobs += $job
}

# Wait for all jobs to complete
$jobs | Wait-Job | Receive-Job | ForEach-Object {
    if ($_ -ne $null) {
        $csvContent.AppendLine($_)
    }
}

# Write content to the file
$csvContent.ToString() | Set-Content -Path $extractfile

# Continue with the rest of the code...