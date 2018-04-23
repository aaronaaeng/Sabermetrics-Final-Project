DROP TABLE IF EXISTS elo;
CREATE TABLE elo AS
	(SELECT player_id, last_name_tx, first_name_tx, team_id, team_tx, pos_tx, "1500" as elo_rating
    FROM rosters
	WHERE year_id = "2013");


DROP TABLE IF EXISTS events_elo;
CREATE TABLE events_elo AS
	(SELECT game_dt, bat_id, pit_id, 
		CASE
			WHEN event_cd = 14 or event_cd = 16 or event_cd = 20 or event_cd = 21 or event_cd = 22 or event_cd = 23 THEN 1
			WHEN event_cd = 2 or event_cd = 3 THEN 0
			ELSE 0.5
		END AS "batter_score", 
        CASE
			WHEN event_cd = 14 or event_cd = 16 or event_cd = 20 or event_cd = 21 or event_cd = 22 or event_cd = 23 THEN 0
			WHEN event_cd = 2 or event_cd = 3 THEN 1
			ELSE 0.5
		END AS "pitcher_score"
	FROM
		(SELECT game_dt, bat_id, pit_id, event_cd, bunt_fl
		FROM events e
		JOIN games g
		ON e.game_id = g.game_id
		WHERE year_id = "2013"
		-- LIMIT 500
        ) a);

#select * from elo;
select * from events_elo;
