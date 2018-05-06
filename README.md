# CSCI 4831 Sabermetrics - Final Project
### An Elo rating system for batters and pitchers, by Ashna Guliani & Aaron Aaeng

http://baseball.connor.fun

Our idea for a new statistic is an ELO rating system, based on the idea that each at-bat of a hitter against a pitcher is a zero-sum situation, in which “each participant's gain or loss of utility is exactly balanced by the losses or gains of the utility of the other participants.” Each time a batter reaches base, it’s considered a victory for the batter. Whenever a batter does not reach base, it’s considered a victory for the pitcher. We won’t be considering the type of hit or out as a “margin of victory” because of the overfitting that Daniel Webb from the USOC said that they experienced when he came to speak to us in class. All players start off with a standardized starting score of 1500. Before each at-bat, or match-up, an expected outcome for each participant is calculated using their respective scores. After each match-up, the winner receives a number of points based on the expected outcome and the loser loses the same number of points. We used the following formulas to determine scores after each matchup:

![Screen Shot 2018-05-06 at 11.28.55 AM](/Users/ashnaguliani/Desktop/Screen Shot 2018-05-06 at 11.28.55 AM.png)

where R_new  is the player's new rating, R_pre is the player's rating before the matchup, R_opp is the opponent's rating before the matchup, K is a constant of 2, E is the player's expected score for the matchup, and S is the actual score of the match (1 for a win, 0.5 for a draw, 0 for a loss). 



Although new ELO ratings are calculated after each matchup, we only grab them after each 1/10 of the way through the season, or about every 16 games. This helps in the graphing component which comes later. 



Since the project has two major components, data will come from two sources.   We will use Retrosheet data to calculate the ELO for any given player. This will allow us to view the game broken down by event. We uses this to determine who “won” the matchup between batter and pitcher. Fantasy scores were calculated using Lahman data. We originally planned on using fantasy data will serve as a standardized metric of comparison to allow us to evaluate the validity of our ranking system by showing whether higher rated players score more fantasy points. Instead, we ended up just standardizing the ELO ratings we already had on a scale of 0 to 1 within the position. This helped us compare batters against pitchers, because pitchers often had much higher ratings because of the fact that in general, batters reach base about 35% of the time. This also helped us evaluate batters against other batters, because even though they in general lose points over the season, they’re still good players if they lose less points than other batters. The normalized ELO ratings are used in the interactive part of our website. 



Our statistic is presented in multiple ways on the web interface. One way is a plot over time for selectable players of their ELO rating to be compared head-to-head. We have interfaces for batters vs pitchers, batters vs batters, and pitchers vs pitchers, all of which are interactive. Separately, we also have graphs showing the best pitchers and batters over the course of the season, and how our ELO ratings compare to the normalized ELO that we also created. We also have a detailed description about the challenges we faced on the website. 