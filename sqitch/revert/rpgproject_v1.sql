-- Revert rpgproject_sqitch:rpgproject_v1 from pg

BEGIN;

DROP TABLE IF EXISTS user;

COMMIT;
