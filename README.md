
$data = Import-CSV -Path "C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\ACEINSExportAll.csv"

function Resolve-UserAccountControl {
    param (
        # 
        [Parameter(Mandatory)]
        [int]
        $UAC
    ) # end param

   
    $UACPropertyFlags = @(
        "SCRIPT",
        "ACCOUNTDISABLE",
        "RESERVED",
        "HOMEDIR_REQUIRED",
        "LOCKOUT",
        "PASSWD_NOTREQD",
        "PASSWD_CANT_CHANGE",
        "ENCRYPTED_TEXT_PWD_ALLOWED",
        "TEMP_DUPLICATE_ACCOUNT",
        "NORMAL_ACCOUNT",
        "RESERVED",
        "INTERDOMAIN_TRUST_ACCOUNT",
        "WORKSTATION_TRUST_ACCOUNT",
        "SERVER_TRUST_ACCOUNT",
        "RESERVED",
        "RESERVED",
        "DONT_EXPIRE_PASSWORD",
        "MNS_LOGON_ACCOUNT",
        "SMARTCARD_REQUIRED",
        "TRUSTED_FOR_DELEGATION",
        "NOT_DELEGATED",
        "USE_DES_KEY_ONLY",
        "DONT_REQ_PREAUTH",
        "PASSWORD_EXPIRED",
        "TRUSTED_TO_AUTH_FOR_DELEGATION",
        "RESERVED",
        "PARTIAL_SECRETS_ACCOUNT",
        "RESERVED",
        "RESERVED",
        "RESERVED",
        "RESERVED",
        "RESERVED",
        "RESERVED"
    ) # end $UACPropertyFlags

    return (0..($UACPropertyFlags.Length) | Where-Object { $UAC -bAnd [math]::Pow(2, $_) } | ForEach-Object { $UACPropertyFlags[$_] }) -join ' | '
} # end Resolve-UserAccountControl

$results = foreach ($User in $data) {
    # Convert special characters to string
    if ($User.Name -match "^X'(.*)'$") {
        $hex = $matches[1] -replace ' '
        $bytes = [byte[]]::new(($hex -split '([0-9a-f]{2}\s*)') | ? { $_ })
        $User.Name = [System.Text.Encoding]::UTF8.GetString($bytes)
    }


    # Retrieve User Path
    $UserPathComponents = $User.DN -split ','
    $UserPath = $UserPathComponents |
        Where-Object {($_ -like 'OU=*') -or ($_ -like 'DC=*')} | 
        ForEach-Object {
            if ($_.StartsWith('OU=')) {
                $GroupName = $_.Split('=')[1]
                $GroupName
            }
            elseif ($_.StartsWith('DC=')) {
                $DomainName = $_.Split('=')[1]
                $DomainName
            }
        }
    $UserPath = $UserPath -join '\'

    # Check Object Class
    switch ($User.objectclass) {
        'user' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'User'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
        } # end user case
        'group' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'Group'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $GroupName.UserAccountControl
            break
        } # end group case
        'computer' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'Computer'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
    } # end switch statement
    'server' {
                    $EmployeeType = $User.EmployeeType
                    $ExtensionAttribute9 = $User.ExtensionAttribute9
                    $ObjectClass = 'Server'
                    $OperatingSystem = $User.OperatingSystem
                    $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
                    break
                }
 }
    # Filter out WORKSTATION_TRUST_ACCOUNT and SERVER_TRUST_ACCOUNT
    if ($AccountControl -notmatch "SERVER_TRUST_ACCOUNT") {
        [PSCustomObject]@{
            Name = $User.Name
            SamAccountName= $User.SamAccountName
            UserPrincipalName = $User.UserPrincipalName
            ObjectCategory = $User.ObjectCategory
            UserPath = $UserPath
            EmployeeType = $EmployeeType
            ExtensionAttribute9 = $ExtensionAttribute9
            ObjectClass = $ObjectClass
            OperatingSystem = $OperatingSystem
            AccountControl = $AccountControl
        }
    }
}



$results | Export-Csv -Path "C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\ACEINSExportAll_modified.csv" -NoTypeInformation





At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:56 char:64
+ ...       $bytes = [byte[]]::new(($hex -split '([0-9a-f]{2}\s*)') | ? { $ ...
+                                                                  ~
Missing ')' in method call.
At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:54 char:40
+     if ($User.Name -match "^X'(.*)'$") {
+                                        ~
Missing closing '}' in statement block or type definition.
At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:52 char:37
+ $results = foreach ($User in $data) {
+                                     ~
Missing closing '}' in statement block or type definition.
At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:56 char:75
+ ...   $bytes = [byte[]]::new(($hex -split '([0-9a-f]{2}\s*)') | ? { $_ })
+                                                                         ~
Unexpected token ')' in expression or statement.
At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:58 char:5
+     }
+     ~
Unexpected token '}' in expression or statement.
At C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\tempCodeRunnerFile.ps1:127 char:1
+ }
+ ~
Unexpected token '}' in expression or statement.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingEndParenthesisInMethodCall
 
