$ErrorActionPreference = "Stop"
$patterns = @('<<<<<<<', '=======', '>>>>>>>')
$files = Get-ChildItem -Recurse -File | Where-Object {
  $_.FullName -notmatch '\\.git\\|\\node_modules\\|\\.next\\' -and
  $_.Extension -in '.ts','.tsx','.js','.jsx','.json','.css','.md','.mjs'
}
$matches = foreach ($file in $files) {
  Select-String -Path $file.FullName -Pattern $patterns -SimpleMatch -ErrorAction SilentlyContinue
}
if ($matches) {
  Write-Host "Unresolved Git merge markers found:" -ForegroundColor Red
  $matches | ForEach-Object { Write-Host "$($_.Path):$($_.LineNumber): $($_.Line)" }
  exit 1
}
Write-Host "No unresolved Git merge markers found." -ForegroundColor Green
