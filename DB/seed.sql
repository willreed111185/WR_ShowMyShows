INSERT INTO users (username, password)
VALUES ("Kendra", "admin");

INSERT INTO users (username, password)
VALUES ("Monica", "admin");

INSERT INTO users (username, password)
VALUES ("Billy", "admin");



insert into shows (title,OMDB_id,imgURL,contentURL)
Values(
"The Walking Dead",
1402,
"http://image.tmdb.org/t/p/w185/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg",
"blank"
);

insert into shows (title,OMDB_id,imgURL,contentURL)
Values(
"The Big Bang Theory",
1418,
"http://image.tmdb.org/t/p/w185/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
"blank"
);

insert into shows (title,OMDB_id,imgURL,contentURL)
Values(
"The Simpsons",
456,
"http://image.tmdb.org/t/p/w185/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
"blank"
);

insert into shows (title,OMDB_id,imgURL,contentURL)
Values(
"Gotham",
60708,
"http://image.tmdb.org/t/p/w185/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg",
"blank"
);



insert into user_shows (userid, showid, relation)
values(
1,
1,
"favorite"
);

insert into user_shows (userid, showid, relation)
values(
1,
1,
"watchList"
);

insert into user_shows (userid, showid, relation)
values(
1,
2,
"watchList"
);

insert into user_shows (userid, showid, relation)
values(
1,
2,
"favorite"
);

insert into user_shows (userid, showid, relation)
values(
2,
3,
"watchList"
);

insert into user_shows (user_id, showid, relation)
values(
2,
3,
"favorite"
);

insert into user_shows (userid, showid, relation)
values(
3,
2,
"watchList"
);

insert into user_shows (userid, showid, relation)
values(
3,
2,
"favorite"
);

insert into user_shows (userid, showid, relation)
values(
3,
4,
"watchList"
);

insert into user_shows (userid, showid, relation)
values(
3,
4,
"favorite"
);