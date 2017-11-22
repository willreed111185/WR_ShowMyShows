SELECT users.id,users.username,shows.title,shows.OMDB_id,shows.imgURL,shows.contentURL
FROM showmyshows.users
INNER join showmyshows.user_shows
on user_shows.user_id = users.id
inner join showmyshows.shows
on shows.id = user_shows.show_id
where user_id = 1;


users.findAll({
	where: {
		user_id = Userid
		},
	include:[
		{
		model:user_shows,
		required:true,
		include:[{model:shows,required:true}]
		}
		]
	})