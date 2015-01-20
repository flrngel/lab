drop table test;

CREATE EXTERNAL TABLE test (created_at timestamp, user_id int, session_uuid string, action string, detail string)
  ROW FORMAT DELIMITED FIELDS TERMINATED BY '|'
  LINES TERMINATED BY '\n'
  LOCATION 's3://vingle-logs/mr_test/input/';

select * 
