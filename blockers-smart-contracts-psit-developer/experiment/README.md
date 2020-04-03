### Aim
In this experiment, the user will learn about a cryptocontract protocol of blockchain i.e. "Smart-Contracts". He/She will learn how a smart contract is
implemented in blockchain and what advantages it has over third party contracts.
### Theory
 <h3>Blockchain Technology</h3>
                     A block chain is basically a living list of records, called as "blocks". These blocks are connected to each other by the diverse cryptographic mechanisms. In the category of data structures, this can be related to the concept of a Linked List. In Block chain, the initial block is known as the "Genesis Block". This naming convention is basically a major commendation to Satoshi Nakamoto. The domain of crypto-currency was pioneered by a bogus naming convention. It can be related to a random scenario of a person or a group of persons, represented by a peculiar name “Satoshi Nakamoto”. In the year 2008, for the purpose of Bitcoin this name was utilized. The technology that was used behind the Bitcoin spectrum was “Block-Chain”. Initially the structure of a block has basically 3 components namely data, hash of current block and hash of previous block. As an illustration in general, the concept of block-chain can be depicted with “m” blocks forming a chain where m can be any random positive integer.
<br><br>  
<h4>Smart-Contracts in Blockchain</h4>
The origin of the Smart-Contract began in the early 1990's by a versatile computer scientist "Nick Szabo". He is also an expert of the cryptographic domain. With the help of this concept, the user or anyone can avoid the  frauds of a middle men. It can allow anyone to trade currency, property or any valuable thing in a hassle-free manner. The user can compare it with a concept of C-Language i.e. "if-else statement". Same here happens, If one condition is fulfilled,then a particular condition will take place and if a particular condition is not met then, some other task will take place. The smart contracts are commited as codes. That simply means that, when an outline of an event takes place the smart contracts are triggered. For example, if in a corporate private organization, the targets are reached then the bonus will be given to the employees. Here, the bonus is basically the process happened when the code of target is completed. Syntactically, the principle is "if/when....then...", that means if a particular condition is met then a particular action will take place.<br>
<br><img src = "images/smart_contract.png"><br>
<h3>Advantages of Smart Contracts</h3>
There are basically 5 benifits of Smart Contracts that are discussed below:<br>
1.  Pace<br>
2.  Correctness<br>
3.  Belief<br>
4.  Certainty<br>
5.  Economizing<br>


<h3>Some Basic Algorithmic Rules Used</h3>
<h3>SHA-256 and ECDSA</h3>
                    SHA-256 or Secure Hash Algorithm-256 bit is a type of hash function which is commonly used in Blockchain. SHA-256 changes an input from the user to a string which is a mixture of numbers and letter which is created through a cryptographically secure hashing function which is almost 0% similar to the input. SHA-256 is the strongest hash function available in the current scenario and it is a successor of SHA-1.<br>
                    Eg:- SHA-256 hash of 'abc' will be 'ba7816bf­8f01cfea­414140de­5dae2223­b00361a3­96177a9c­b410ff61­f20015ad'<br>
                    ECDSA stands for Elliptic Curve Digital Signature Algorithm. ECDSA consists of three parts.<br>
                    &#9679;&nbsp;Private Key<br>
                    &#9679;&nbsp;Public Key<br>
                    &#9679;&nbsp;Signature<br><br>
                    <b>Private Key :- </b>It is a number in form of secret key which is known only to the person who owns it and does transactions. Private Key is a randomly generated number which is a single unsigned 256 bit integer.<br>
                    <b>Public Key :- </b>It is a number generated from Private Key but is not kept secret. A public Key can be determined from Private Key but Private Key cannot be determined from Public Key. A Public Key can be used to determine whether a Signature is genuine or not without requiring Private Key.<br>
                    <b>Signature :- </b>It is a number that confirms about a signing operation taking place. A Signature is a mathematically generated hash of the signed number and Priavte Key. A Public Key is used to determine whether the signature entered is genuine or not which provides security to the transactions.<br><br>
                      <img src = "images/sha-256.png"><br><br>
                    <img src ="images/ecdsa.png" width="50%" height="50%"><br>
                    
### Procedure

<h4>Steps of simulator </h4><br>
                        1. Start with the task regarding concept of smart contract.<br>
                        2. Click on the block to add it into the final solution block.<br>
                        3. After adding all the blocks correctly as per the instructions, click on validate button.<br>
                        4. Click in the hint button to get the hint of the wrong question if any and repeat the above process to get all the right answers.<br>
                        5. Click on the "Initiate Smart Contract Experiment" button to go to the experiment page.
                        6. To Understand the concept of Smart Contract, Select the type of contract.<br>
                        7. After selecting the Simple explanation option, Enter the name of sender and the receiver then enter the amount to be sent. <br>
                        8. Now click on the "ADD TO BLOCK" button to add the block.<br>
                        9. Complete the same process for the next user.<br>
                        10. Now click on "PUBLISH VALIDATED BLOCK" button to publish the block.<br>
                        11. Now after selecting the "DONATION CAMPAIGN EXAMPLE", Enter the Donation campaign name.<br>
                        12. The information box will also be there to make the user understand about the basic process that is happening in the simulator. <br>
                        13. Enter the necessary detailes like Username, Target amount and Timelimit(in sec). <br>
                        14. After that click on the "CREATE CONTRACT" button to create the contract.<br>
                        15. Now enter the Name of sender and receiver and the amount to be sent in the entered time limit.<br>
                        16. Click on the "ADD TO BLOCK" button and then repeat the above step to enter another detail. <br>
                        17. Now click on the "PUBLISH THE VALIDATED BLOCK" button to publish the block.  <br>
                        18. Now the block will be added to the Node A if the block is get published in the given time otherwise the amount will be automatically send back to the doner. <br>
                        
### Pre Test
1. A smart contract also known as
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Aleatory contract
                        <br>
                        **B**.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;**Cryptocontract**
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Encrypted contract
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;None of these
                        <br>
                        <p id = "p1"></p>
                        <br>
 2. A smart contract is a 
                        <br>
                        A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp;Cryptocurrency
                        <br>
                        **B**. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;**Computer program**
                        <br>
                        C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp;Blockchain
                        <br>
                        D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;None of the above
                        <br><br>
                        <p id = "p2"></p>
                        <br>
 
 3. Smart contract enhances
                        <br>
                        **A**. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;**transparency**
                        <br>
                        B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;cost
                        <br>
                        C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp;time expenditure
                        <br>
                        D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;Secrecy
                        <br><br>
                        <p id = "p4"></p>
                        <br>
4. Smart contract can function as
                       <br>
                        A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;multi-signature accounts
                        <br>
                        B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;manage agreement between users
                        <br>
                        C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;Provide utility to other contracts
                        <br>
                        **D**. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp;**All of the above**
                        <br><br>
                        <p id = "p3"></p>
                        <br>
5. Smart contract stores
                        <br>
                        **A**.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;**Information about an application**
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;hashes
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;recievers address
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;None of these
                        <br>
                        <p id = "p1"></p>
                        <br>
6. Who invented smart contracts?
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Satoshi nakamoto
                        <br>
                        **B**.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;**Nick Szabo**
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Johannes Trithemius
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;None of these
                        <br>
                        <p id = "p1"></p>
                        <br>



### Post Test
1. In which language smart contract can be written?
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Solidity
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Serpent
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Lisp
                        <br>
                      **D**.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp; **All of the  above**
                        <br>
                        <p id = "p1"></p>
                        <br>
 2. Who executes the contracts ?
                        <br>
                        A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp;Sender
                        <br>
                        B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;Receiver
                        <br>
                        **C**. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp;**Miner**
                        <br>
                        D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;None of these
                        <br><br>
                        <p id = "p2"></p>
                        <br>
 
 3. Which of the following plateforms uses smart contract?
                        <br>
                        A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;Ethereum
                        <br>
                        B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;Bitcoin
                        <br>
                        C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp;Nxt
                        <br>
                        **D**. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;**All of these**
                        <br><br>
                        <p id = "p3"></p>
                        <br>
4. In smart contract you don't need to use intermediary service like
                       <br>
                        A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;brokers 
                        <br>
                        B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;Agents
                        <br>
                        **C**. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;**Both A and B**
                        <br><br>
                        <p id = "p4"></p>
                        <br>
5. How smart contract can be executed?
                        <br>
                        **A**. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;**They can self-verify the conditions placed inside it**
                        <br>
                        B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;They need to be verified by receiver
                        <br>
                        C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp;Both A and B
                        <br>
                        D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;None of the above
                        <br><br>
                        <p id = "p5"></p>
                        <br>





### References
<p style="font-size:100%; margin-top:2%">
                        
1. Draft version of “S. Shukla, M. Dhawan, S. Sharma, S. Venkatesan, ‘Blockchain Technology: Cryptocurrency and Applications’, Oxford University Press, 2019.<br>
2. Josh Thompson, ‘Blockchain: The Blockchain for Beginnings, Guild to Blockchain Technology and Blockchain Programming’, Create Space Independent Publishing Platform, 2017<br>
3. Hassan, F. U., Ali, A., Latif, S., Qadir, J., Kanhere, S., Singh, J., & Crowcroft, J. (2019). Blockchain And The Future of the Internet: A Comprehensive Review.


<h3>Webliography :</h3>
                        <br>
                        1.&nbsp;https://data-flair.training/blogs/blockchain-terminologies/ <br>
                        2.&nbsp;https://github.com/anders94/blockchain-demo <br>
                        3.&nbsp;https://anders.com/blockchain/ <br>
                        4.&nbsp;https://blockgeeks.com/guides/what-is-blockchain-technology/ <br>
                        5.&nbsp;https://shecancode.io/blog/an-introduction-to-blockchain-distributed-ledgers <br>
                        6.&nbsp;https://www.coindesk.com/information/ethereum-smart-contracts-work <br>
                        7.&nbsp;https://mlsdev.com/blog/156-how-to-build-your-own-blockchain-architecture <br>
                        8.&nbsp;http://www.conceptfound.com/Misunderstandings-of-Blockchain <br>
                        9.&nbsp;https://www.coindesk.com/information/what-is-a-decentralized-application-dapp <br>
                        10.&nbsp;https://mlsdev.com/blog/156-how-to-build-your-own-blockchain-architecture <br>
                        11.&nbsp;https://www.business-case-analysis.com/ledger.html <br>
                        12.&nbsp;https://data-flair.training/blogs/blockchain-quiz-test-knowledge/ <br>
                        13.&nbsp;https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Merkle-Damgard_hash_big.svg <br>
                        14.&nbsp;https://medium.com/cryptoadvance/ecdsa-is-not-that-bad-two-party-signing-without-schnorr-or-bls-1941806ec36f <br>
                        15.&nbsp;https://www.capgemini.com/2019/02/why-there-is-so-much-fuss-around-consensus-model-in-blockchain/ <br>
                        16.&nbsp;https://blockgeeks.com/guides/smart-contracts/ <br>
                        17.&nbsp;https://github.com/Savjee/SavjeeCoin  <br>
                        18.&nbsp;https://www.techopedia.com/definition/32530/mining-blockchain <br>
                        19.&nbsp;https://www.investopedia.com/terms/p/proof-stake-pos.asp <br>





