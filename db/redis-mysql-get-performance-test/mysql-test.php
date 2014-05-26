<?
include "DBMysql.php";
$db=new DB\Mysql;

# select
$arr=array();
for($i=0;$i<1000000;$i++){
	$arr[]=intval(rand()%1000007);
}
#sort($arr);
echo "arr: ",count($arr),"\r\n";
$uarr=array_unique($arr);
echo "uarr: ",count($uarr),"\r\n";
$str=implode(',',$arr);

echo "--test--\r\n";

# TEST1: select all
goto noskip;
skip:
# covering index
$sql="select a.* from (select a from asdf where a in ($str)) b inner join asdf a on b.a=a.a";

$t1=microtime(true);
$s=$db->query($sql)->fetch_all_objects();
echo count($s)."\r\n";
unset($s);
$t2=microtime(true);
echo ($t2-$t1)."\r\n";

# just query
$sql="select * from asdf where a in ($str)";

$t1=microtime(true);
$s=$db->query($sql)->fetch_all_objects();
echo count($s)."\r\n";
$t2=microtime(true);
echo ($t2-$t1)."\r\n---\r\n";
goto skip;

# TEST2: select one by one
noskip:
$t1=microtime(true);
$cnt=count($uarr);
for($i=0;$i<$cnt;$i++){
	$sql="select * from asdf where a='$uarr[$i]'";
	$db->query($sql)->nfo();
}
$t2=microtime(true);
echo ($t2-$t1)."\r\n";
?>
