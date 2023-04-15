# documentation
Feature: Api status
  In order to know the server is up and running
  As a health check
  I want to check the api status


  # lo bueno:
  # Scenario: Check the api status
  #   Given I send a GET request to "/status"           # steps - '/status' parametro q recibira el test
  #   Then the response status code should be 200       # steps - igual el 200 es un param
  Scenario: Check the api status
    When I send a GET request to "/status"
    Then the response status code should be 200
