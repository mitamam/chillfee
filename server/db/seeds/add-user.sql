CREATE PROCEDURE add_user()
LANGUAGE plpgsql
AS $$
DECLARE
    i integer;
    each_users integer;
BEGIN
    i := 1;
    each_users := 3;
    LOOP
        INSERT INTO users
        VALUES (i, concat('User ', i), concat('user', i, '@example.com'), concat('user', i, '_password'), 0, 'user_icon.jpg');
        INSERT INTO users
        VALUES (i + each_users, concat('User_business ', i + each_users), concat('user', i + each_users, '@example.com'), concat('user', i + each_users, '_password'), 1, 'user_icon.jpg');

        IF i = each_users THEN
            EXIT;
        END IF;

        i := i + 1;
    END LOOP;
END
$$;