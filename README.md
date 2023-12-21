$data = Import-CSV -Path "C:\Users\SASAHA3\Desktop\WindowsPowershell\powershellcommands\ACEINSExportAll.csv"

function Resolve-UserAccountControl {
    param (
        [Parameter(Mandatory)]
        [int]
        $UAC
    )

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
    )

    return (0..($UACPropertyFlags.Length - 1) | Where-Object { $UAC -bAnd [math]::Pow(2, $_) } | ForEach-Object { $UACPropertyFlags[$_] }) -join ' | '
}

$results = foreach ($User in $data) {
    if ($User.Name -match "^X'(.*)'$") {
        $hex = $matches[1] -replace ' '
        $bytes = [byte[]]::new(($hex -split '([0-9a-f]{2}\s*)' | Where-Object { $_ }) -as [int[]])
        $User.Name = [System.Text.Encoding]::UTF8.GetString($bytes)
    }

    $UserPathComponents = $User.DN -split ','
    $UserPath = $UserPathComponents | Where-Object {($_ -like 'OU=*') -or ($_ -like 'DC=*')} | ForEach-Object {
        if ($_ -like 'OU=*') {
            $GroupName = $_.Split('=')[1]
            $GroupName
        }
        elseif ($_ -like 'DC=*') {
            $DomainName = $_.Split('=')[1]
            $DomainName
        }
    }
    $UserPath = $UserPath -join '\'

    switch ($User.objectclass) {
        'user' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'User'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
        }
        'group' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'Group'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
        }
        'computer' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'Computer'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
        }
        'server' {
            $EmployeeType = $User.EmployeeType
            $ExtensionAttribute9 = $User.ExtensionAttribute9
            $ObjectClass = 'Server'
            $OperatingSystem = $User.OperatingSystem
            $AccountControl = Resolve-UserAccountControl -UAC $User.UserAccountControl
            break
        }
    }

    if ($AccountControl -notmatch "SERVER_TRUST_ACCOUNT") {
        [PSCustomObject]@{
            Name = $User.Name
            SamAccountName = $User.SamAccountName
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