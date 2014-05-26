<?
include "DBMysql.php";
$db=new DB\Mysql;

$sql="insert into asdf (val) values('iu12h31uh23iu1h23ijh1iruh3ijnvifsuhsiuhdf')";
$i = 5000000;
while($i--){
	$db->query($sql);
}
?>
