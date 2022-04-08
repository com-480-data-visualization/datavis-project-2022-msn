# Milestone 1 

## Abstract :

The aim of this project is to analyze people’s happiness across the world, according to several factors. We will then, through this study, put in common multiple databases that recorded different information on people’s way of living, in order to find correlations between happiness and its circumstances.

## Dataset :

For this project, we choose to work on different databases in order to put in common multiple types of information. 

- Happiness Dataset : [World Happiness Report up to 2022](https://www.kaggle.com/datasets/mathurinache/world-happiness-report) - John Helliwell, Richard Layard, Jeffrey D. Sachs, and Jan Emmanuel De Neve

- Weather Datasets :
    - [Daily Temperature of Major Cities](https://www.kaggle.com/datasets/sudalairajkumar/daily-temperature-of-major-cities) - University of Dayton
    - [Temperature History of 1000 cities 1980 to 2020](https://www.kaggle.com/datasets/hansukyang/temperature-history-of-1000-cities-1980-to-2020) - Copernicus Climate Data Store
    - [Sunshine duration by city](https://www.kaggle.com/datasets/prasertk/sunshine-duration-by-city) - Wikipedia

- Economic Dataset : [World Development Indicators](https://databank.worldbank.org/source/world-development-indicators/preview/on) - World Bank 
- Population Dataset : [World Population](https://data.worldbank.org/indicator/SP.POP.TOTL) - World Bank 
- Religion Dataset : [Correlates of War: World Religions](https://www.kaggle.com/datasets/umichigan/world-religions) - University of Michigan
- Nutrition Dataset : [2021 Global Nutrition Report](https://globalnutritionreport.org/reports/2021-global-nutrition-report/) - UNICEF, WHO and World Bank

## Problematic :

Since the beginning of humanity, happiness has always been the main source of interest for all human beings.. But this common goal toward which people strive, remains for many, frustratingly out of reach. To achieve this state of joy, satisfaction, contentment, and fulfillment, people always tried to use their intelligence to its fullest potential in order to provoke this famous happiness.

During the last centuries, it has often been said that money can buy happiness. Further back in time, humans thought that this happiness could only be reached thanks to spiritual peace, often related to the faith of a religion or belief. And nowadays, happiness is obviously linked to a healthy and balanced lifestyle, in terms of occupation, nutrition and relationships. 

These debates and convictions have then occupied people’s minds for millennia as it is nearly impossible to find a causality explanation to happiness. However, thanks to the new techniques developed in the domains of data science and machine learning, it is now possible to analyze the factors that interact with the concept of happiness. In this perspective, we will then, during this project, try to find and visualize correlations between happiness and other factors that influence our daily lives such as the weather, people’s economic situation, their nutrition or even their beliefs. 

The objective of this work is then to determine the ingredients for human pursuit of happiness in a world of constant evolution. 

## Exploratory Data Analysis :

Our primary dataset is a collection over time of countries and their associated "happiness score". This score was calculated by averaging people's answers to the question "on a scale from 1 to 10, how would you rate your happiness?". There are a myriad of other metrics we might or might not use in our analysis. For instance, the trust in government or life expectancy of the country's residents. Every score is normalized except the actual happiness score, which lives in the range [1, 10]. Interestingly enough, even though a world "half happy" would yield an average score of approximately (1 + 10) / 2 = 5.5, we noticed that by aggregating the happiness score of all countries, we barely miss the mark with a total of 5.38.

In addition to this base data, we are cherry-picking datasets which could have an impact on one's happiness score in order to determine whether or not there exists a correlation between happiness and the particular dataset's data:

Our first thought was to wonder whether the weather would impact the satisfaction of people around the world. We ended up choosing three sets to hopefully answer the question:

- The first two are time-series (daily records) of 124 countries and their recorded temperature. We do not provide basic statistics for these datasets, as it will require some basic cleaning before extracting any data. For instance, some records in Hamburg are dated to the year 200 instead of the probable value of 2000. Moreover, on these same tuples, we also distinguish some odd temperature values of -99 [°C]. We will thus start by cleaning the tables before making any assumptions on it.
- The third dataset we chose in order to argue about the possible weather influence is a time-series (monthly records) displaying the average amount of sunshine per month in each country. It was interesting – and unexpected – to discover that the amount of sunshine worldwide follows the seasonal trends (e.g. December and January have a value of 173 and 180 respectively, whereas June goes as high as 237) of the Northern Hemisphere. We will however check for any possible bias (e.g. hemisphere way more represented than the other) before any further statistics.

What are the possible economic factors that might influence people's happiness? The[ World Development Indicators](https://databank.worldbank.org/source/world-development-indicators/preview/on) dataset, published by the World Bank, contains important economic measures on different countries and we selected several indicators from it as the Economic dataset. Our dataset contains 16 indicators for 217 countries or regions from 1960 to 2020, including GDP, GNI per capita, Gina index, etc. We probably won't need the data before 2015 and there are some missing values for some countries, but in general the dataset is clean and ready for analysis.

Population might be another important factor that affects general happiness. This dataset from World Bank ([World Population](https://data.worldbank.org/indicator/SP.POP.TOTL)) contains population data of different countries or regions from 1960 to 2020. Again, we might not need the data in the last century, and overall the dataset is clean. However, we might still need the data from 2020 to 2022, so we will find the complements in later stages.

Does happiness come from God? The spiritual power could be a strong source for happiness, so we decided to use a religious dataset to find the correlation between religious beliefs and the extent of happiness. The dataset obtained from Kaggle ([Correlates of War: World Religions](https://www.kaggle.com/datasets/umichigan/world-religions)) is composed of global, national and regional data with both absolute number and percentage of population for adherents of different religions from 1945 to 2010. The problem of this dataset is still the redundancy since we are not in need of the obsolete data. The data is up to 2010 so we could use these data to predict approximately the religion distribution in recent years.

The last factor that we selected for this study is people's nutrition. For that, we selected a database coming from [The 2021 Global Nutrition Report](https://globalnutritionreport.org/reports/2021-global-nutrition-report/) made by UNICEF, the World Health Organization and World Bank. This database contains different indices that describe humans health and nutrition (e.g. Obesity, blood pressure, diabetes)

We did some preliminary analysis on the last three dataset, the plots and codes can be seen in file [pre_analysis.ipynb](pre_analysis.ipynb).

## Related work :

The databases that we are using have also been used for many other purposes. But the combination of these information in order to describe happiness has not been done with these tables in the past. 
However, multiple studies in data science already dealt with the subject of happiness. For example, a report done by Lenstore company in the United Kingdom, named [Healthy lifestyle cities report 2021](https://www.lenstore.co.uk/research/healthy-lifestyle-report/) describe a similar technique done in 2021 with other databases in order to rank the best cities to live in. 

Our work differs from what has been done before as we are combining multiple sets together in order to find a possible correlation between them. As the subject of happiness is very wide and subjective, this technique of merging different datasets could help us achieve a more general conclusion by taking into account lots of different factors. 

For inspiration we based our work on the full World happiness report that also tries to find explanations to the data it presents. This report is internationally recognized and several people tried reproducing its conclusions (eg : [Happiness and life satisfaction](https://towardsdatascience.com/happiness-and-life-satisfaction-ecdc7d0ab9a5)) 



