

Feature: Amazon Test
Scenario: Search Box

@amazonSearch  @searchBox
Given url gidilir
When amazon sayfasinin acildigi dogrulanir
Then searchBox kutusunda kitap aratilir
And kitap aramasini dogrula
