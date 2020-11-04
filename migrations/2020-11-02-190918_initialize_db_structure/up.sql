-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "categories";
DROP SEQUENCE IF EXISTS categories_cat_id_seq;
CREATE SEQUENCE categories_cat_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."categories" (
    "id" integer DEFAULT nextval('categories_cat_id_seq') NOT NULL,
    "name" text NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "categories_category_name" UNIQUE ("name"),
    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "categories" ("id", "name", "created_at", "updated_at") VALUES
(1,	'File Converters',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(2,	'Stats/Visualizations',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(3,	'Transformations',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(4,	'Dissimilarity',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(5,	'Correlation',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(6,	'Centrality',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(7,	'Clustering',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(8,	'Time Series',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(9,	'External Tools',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475'),
(99,	'Miscellaneous',	'2020-06-20 00:00:00',	'2020-06-20 18:39:21.424475');

DELIMITER ;;

CREATE TRIGGER "categories_set_timestamp" BEFORE UPDATE ON "public"."categories" FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "languages";
DROP SEQUENCE IF EXISTS langauges_lang_id_seq;
CREATE SEQUENCE langauges_lang_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."languages" (
    "id" integer DEFAULT nextval('langauges_lang_id_seq') NOT NULL,
    "name" text NOT NULL,
    CONSTRAINT "langauges_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "languages_language_name" UNIQUE ("name")
) WITH (oids = false);


DROP TABLE IF EXISTS "plugins";
DROP SEQUENCE IF EXISTS plugins_plu_id_seq;
CREATE SEQUENCE plugins_plu_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."plugins" (
    "id" integer DEFAULT nextval('plugins_plu_id_seq') NOT NULL,
    "name" text NOT NULL,
    "category_id" integer NOT NULL,
    "description" text NOT NULL,
    "github_url" text NOT NULL,
    "language_id" integer NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "plugins_github_url" UNIQUE ("github_url"),
    CONSTRAINT "plugins_name" UNIQUE ("name"),
    CONSTRAINT "plugins_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "plugins_category_id_fkey" FOREIGN KEY (category_id) REFERENCES categories(id) NOT DEFERRABLE,
    CONSTRAINT "plugins_primary_langugage_id_fkey" FOREIGN KEY (language_id) REFERENCES languages(id) NOT DEFERRABLE
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "plugins_set_timestamp" BEFORE UPDATE ON "public"."plugins" FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "publications";
DROP SEQUENCE IF EXISTS publications_pub_id_seq;
CREATE SEQUENCE publications_pub_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."publications" (
    "id" integer DEFAULT nextval('publications_pub_id_seq') NOT NULL,
    "author" text NOT NULL,
    "title" text NOT NULL,
    "advance_info" text,
    "publish_date" date NOT NULL,
    "publisher" text,
    "version" text,
    "url" text,
    "date_accessed" date,
    "annotation" text,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "publications_set_timestamp" BEFORE UPDATE ON "public"."publications" FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();;

DELIMITER ;

DROP TABLE IF EXISTS "roles";
DROP SEQUENCE IF EXISTS roles_role_id_seq;
CREATE SEQUENCE roles_role_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."roles" (
    "id" integer DEFAULT nextval('roles_role_id_seq') NOT NULL,
    "name" text NOT NULL,
    CONSTRAINT "roles_role_id" PRIMARY KEY ("id"),
    CONSTRAINT "roles_role_name" UNIQUE ("name")
) WITH (oids = false);


DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_user_id_seq;
CREATE SEQUENCE users_user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_user_id_seq') NOT NULL,
    "email" text NOT NULL,
    "password_hash" text NOT NULL,
    "roles" smallint[] NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "users_email_key" UNIQUE ("email"),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DELIMITER ;;

CREATE TRIGGER "users_set_timestamp" BEFORE UPDATE ON "public"."users" FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();;

DELIMITER ;

-- 2020-11-03 20:18:41.963209+00
