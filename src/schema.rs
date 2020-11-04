table! {
    categories (id) {
        id -> Int4,
        name -> Text,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    languages (id) {
        id -> Int4,
        name -> Text,
    }
}

table! {
    people (id) {
        id -> Int4,
        name -> Text,
        role_id -> Int4,
        title -> Text,
        speciality -> Text,
        profile_picture -> Nullable<Text>,
        url -> Nullable<Text>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    pipelines (id) {
        id -> Int4,
        name -> Text,
        description -> Text,
        github_url -> Text,
        status -> Bool,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    plugins (id) {
        id -> Int4,
        name -> Text,
        category_id -> Int4,
        description -> Text,
        github_url -> Text,
        language_id -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    publications (id) {
        id -> Int4,
        author -> Text,
        title -> Text,
        advance_info -> Nullable<Text>,
        publish_date -> Date,
        publisher -> Nullable<Text>,
        version -> Nullable<Text>,
        url -> Nullable<Text>,
        date_accessed -> Nullable<Date>,
        annotation -> Nullable<Text>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles (id) {
        id -> Int4,
        name -> Text,
    }
}

table! {
    users (id) {
        id -> Int4,
        email -> Text,
        password_hash -> Text,
        roles -> Array<Int2>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

joinable!(people -> roles (role_id));
joinable!(plugins -> categories (category_id));
joinable!(plugins -> languages (language_id));

allow_tables_to_appear_in_same_query!(
    categories,
    languages,
    people,
    pipelines,
    plugins,
    publications,
    roles,
    users,
);
