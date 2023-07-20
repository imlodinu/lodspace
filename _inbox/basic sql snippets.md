#ztlit
[[datagySQLBeginnersTutorial2020]]
```sql
/* Create a table */
CREATE TABLE [IF NOT EXISTS] tableName (
	column1 data_type PRIMARY KEY,
   	column2 data_type NOT NULL,
	column3 data_type DEFAULT 0,
	table_constraints
);

/* Insert some data */
/* the tuple-like structure at the end of the statement can be (),...; to add more values */
INSERT INTO table (column1,column2 ,..) VALUES( value1, value2 ,...);

/* Update record with optional condition */
/* Condition might look something like: 
	client_id = 1;
*/
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

/* Delete record with condition */
DELETE FROM table_name WHERE condition;

/* Condition statements such as AND and OR are supported, along with operators.
	<
	\>
	<=
	>=
	LIKE - LIKE 'name'
	IN - IN ('name1', 'name2')
	BETWEEN - BETWEEN 10 AND 200
*/

/* Selecting columns from a table with a condition
	wildcard can be used for column_list for all columns.
*/
SELECT column_list FROM table_name WHERE condition;
```
