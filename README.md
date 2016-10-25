# costume-party

## SQL commands 
we create a specific user in the db for a project for security purposes

```
create database costume_party;
create user 'l33tdba'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'l33tdba'@'localhost';
```



