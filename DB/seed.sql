INSERT INTO users (username, password,createdAt,updatedAt)
VALUES ("Kendra", "admin",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO users (username, password,createdAt,updatedAt)
VALUES ("Monica", "admin",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO users (username, password,createdAt,updatedAt)
VALUES ("Billy", "admin",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
insert into shows (title,OMDB_id,imgURL,contentURL,createdAt,updatedAt)
Values(
"The Walking Dead",
1402,
"http://image.tmdb.org/t/p/w185/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into shows (title,OMDB_id,imgURL,contentURL,createdAt,updatedAt)
Values(
"The Big Bang Theory",
1418,
"http://image.tmdb.org/t/p/w185/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into shows (title,OMDB_id,imgURL,contentURL,createdAt,updatedAt)
Values(
"The Simpsons",
456,
"http://image.tmdb.org/t/p/w185/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into shows (title,OMDB_id,imgURL,contentURL,createdAt,updatedAt)
Values(
"Gotham",
60708,
"http://image.tmdb.org/t/p/w185/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (UserID, ShowID, relation,createdAt,updatedAt)
values(
1,
1,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
1,
1,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
1,
2,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
1,
2,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
2,
3,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
2,
3,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
3,
4,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into user_shows (userid, showid, relation,createdAt,updatedAt)
values(
3,
4,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);