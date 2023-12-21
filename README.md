if ($User.Name -match "^X'(.*)'$") {
    $hex = $matches[1] -replace ' '
    $bytes = [byte[]]::new(($hex -split '([0-9a-f]{2})' | Where-Object { $_ }) -as [byte[]])
    $User.Name = [System.Text.Encoding]::UTF8.GetString($bytes)
    $User.Name = $User.Name.TrimEnd("`0")  # Trim null characters at the end if any
}