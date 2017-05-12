$manager = Get-IISServerManager
$manager.Sites['Default Web Site'].Applications['/'].VirtualDirectories['/'].PhysicalPath=('{0}\www' -f $PsScriptRoot)
$manager.commitChanges()
