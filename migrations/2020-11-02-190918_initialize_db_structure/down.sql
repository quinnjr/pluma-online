-- This file should undo anything in `up.sql`

DROP TABLE IF EXISTS "categories";
DROP SEQUENCE IF EXISTS categories_cat_id_seq;

DROP TABLE IF EXISTS "languages";
DROP SEQUENCE IF EXISTS langauges_lang_id_seq;

DROP TABLE IF EXISTS "plugins";
DROP SEQUENCE IF EXISTS plugins_plu_id_seq;

DROP TABLE IF EXISTS "publications";
DROP SEQUENCE IF EXISTS publications_pub_id_seq;

DROP TABLE IF EXISTS "roles";
DROP SEQUENCE IF EXISTS roles_role_id_seq;

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_user_id_seq;
