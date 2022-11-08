## Blockchain Town Planning Budgeting App

# Voting app

G1T3

#### Setup
1) We are using Ganache as our blockchain - https://trufflesuite.com/ganache/
2) To deploy your own blockchain, navigate to blockchain-backend and run ``truffle deploy``
3) Navigate to /frontend-v1 and run ``yarn && yarn dev`` to start the frontend

#### Testing the app
1) You will need a few metamask accounts which you can get from ganache
-- Main account 
-- Director account
-- Voter account

**NOTE**: Remember to change the metamask addresses in /frontend-v1/utils/constants/blockchainAddresses.ts directory

2. Once that it set up, you can navigate to localhost:3000/admin to create a proposal (ensure that you are using director blockchain address) - enter in all the necessary details and a proposal should be created

3. Navigate to /login page and change your metamask wallet to the Voter account, log in with any credentials and it will you will be added as voter and redirected to the main page '/'

4. To vote for a proposal, select yes or no for any of them (refresh the page to see your votes)

5. Head back to /admin and change your metamask account back to director - you may proceed to click on "End proposal" and all the winning proposals will be shown (where voteYesCount > voteNoCount)

6. Change your metamask account to the Main account and click on Send money to transfer the money needed for the proposal. You will see the value being deducted in Ganache.




