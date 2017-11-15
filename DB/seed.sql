insert into shows (title,OMDB_id,imgURL,contentURL,createdAt,updatedAt)
Values(
"The Walking Dead",
1402,
"http://image.tmdb.org/t/p/w185/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
"The Big Bang Theory",
1418,
"http://image.tmdb.org/t/p/w185/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
"The Simpsons",
456,
"http://image.tmdb.org/t/p/w185/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
"Gotham",
60708,
"http://image.tmdb.org/t/p/w185/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
"Stranger Things",
66732,
"lXS60geme1LlEob5Wgvj3KilClA.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
"Sherlock",
19885,
"http://image.tmdb.org/t/p/w185/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg",
"blank",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
insert into users (username,password,createdAt,updatedAt)
Values(
"Billy",
"1234",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
"Monica",
"1234",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
"Kendra",
"1234",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);

insert into user_shows (userId, showId, relation,createdAt,updatedAt)
values(
1,
1,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
1,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
1,
5,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
5,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
1,
6,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
6,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
2,
6,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
6,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
3,
6,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
3,
6,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),
(
1,
2,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
2,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
1,
3,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
3,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
1,
4,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
4,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
1,
5,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
1,
5,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
2,
1,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
1,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
2,
2,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
2,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
2,
3,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
3,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
2,
4,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
4,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),(
2,
5,
"watchList",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
),	
(
2,
5,
"favorite",
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP
);
