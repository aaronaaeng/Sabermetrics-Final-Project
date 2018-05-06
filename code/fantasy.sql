use lahman2016;

DROP TABLE IF EXISTS bat;
CREATE TEMPORARY TABLE bat AS
select DISTINCT m.retroID as player_id, teamID, nameFirst, nameLast, score
from 
	(select a.playerID, teamID, (1B*.88 + 2B*1.2 + 3B*1.55 + HR*1.98 + BB*0.69 + RBI*.75 + a.SB*0.2 + K*-0.2 + HBP*0.72 + SAC*0.1 + a.CS*-0.42) as score
	from
		(select playerID, teamID, yearID, (H - (2B + 3B + HR)) as 1B, 2B, 3B, HR, BB, RBI, SB, SO as K, HBP, (SF + SH) as SAC, CS
		from batting 
		where yearID = '2013' and G >= 20 and playerID NOT IN (SELECT playerID FROM pitching)) a )b
left join 
master m
on b.playerID = m.playerID
order by score desc;
select * from bat;


DROP TABLE IF EXISTS pitch;
CREATE TEMPORARY TABLE pitch AS
select m.retroID as player_id, teamID, nameFirst, nameLast, score
from 
	(select playerID, teamID, (IP*1.2 + ER*-2 + W*4 + L*-4 + SV*3 + SO*1 + G*0.5 + BK*-1 + CG*0.75) as score
	from
		(select playerID, teamID, IPouts/3 as IP, ER, W, L, SV, SO, G, BK, CG
		from pitching 
		where yearID = '2013' and G >= 4) a) b
left join 
master m
on b.playerID = m.playerID
order by score desc;
select * from pitch;