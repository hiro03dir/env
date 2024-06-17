-- デフォルトはpublicスキーマに作成される
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, name, password) VALUES
    -- パスワードはpasswordをBCryptエンコードしたものを追加
    ('test1@test.jp', 'user', '$2a$08$RMFuawla6slcXQqSQbqHVOIIDxhIKc7Q61G4YxJGNxy4LD4ECFQUq'),
    ('test2@test.jp', 'Smith', '$2a$08$RMFuawla6slcXQqSQbqHVOIIDxhIKc7Q61G4YxJGNxy4LD4ECFQUq'),
    ('test3@test.jp', 'Johnson', '$2a$08$RMFuawla6slcXQqSQbqHVOIIDxhIKc7Q61G4YxJGNxy4LD4ECFQUq')
;
