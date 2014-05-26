# mysql vs redis GET MULTIPLE KEYS performance test

10m(10,000,000) rows(see `mysql-insert.php`, `redis-insert.rb`)

mysql used innodb

### INSTALL

	npm install hiredis redis async

## Mysql ( using `IN` CLAUSE ), php

`IN` makes PK list unique automatically

	$ php mysql-test.php
	arr: 1000000
	uarr: 632047
	--test--
	// select a.* from (select a from asdf where a in ($str)) b inner join asdf a on b.a=a.a
	632046
	8.5162310600281s
	// select * from asdf where a in ($str)
	632046
	7.3770079612732s

## Redis ( using `mget` COMMAND ), nodejs

	--test--
	1000000
	ELAPSED:  2.168s
	--//test--

## Mysql ( one-by-one select ), php

	$ php mysql-test.php
	arr: 1000000
	uarr: 631954
	--test--
	53.007466077805

## Redis ( one-by-one get ), nodejs

	--test--
	41
	ELAPSED:  38.063
	--//test--

## note

- mysql is not that bad. although redis is more faster in regular cases.

- result could be change by setting.

- do not use `one-by-one` queries
