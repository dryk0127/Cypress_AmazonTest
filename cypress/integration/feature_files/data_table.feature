
Feature: Data Table


@dataTable1 @smoke
Scenario: Login1 
Given url git
When login butonuna tikla
Then datalari kullanarak sayfaya gidilir
|email                      | password  |
|amitai.kamarian@falkcia.com| 123456789!|
And sayfaya girildigini onayla

@dataTable2
Scenario: Login2 
Given url git
When login butonuna tikla
Then datalari kullanarak sayfaya gidilir
|email                     | password |
|mavrick.coltin@falkcia.com| 123456789|
And sayfaya girildigini onayla