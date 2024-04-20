
Feature: Capitals
Scenario Outline: Capitals Search

@searchBox
Given url gidilir
Then arama yapilacak "<Worl Capitals>"
And arama yapildigini kontrol et "<Worl Capitals>"

Examples:
    | Worl Capitals | 
    | Ankara | 
    | Londra | 
    | Roma | 
