// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;


    event Trannsfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter += 1;

        transactions.push(TransferStruct(
            msg.sender, 
            receiver, 
            amount, 
            message, 
            block.timestamp, 
            keyword
        ));

        emit Trannsfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
        
    }

    function getAllTransaction() public view returns( TransferStruct[] memory) {
        
    }

    function getTransactionCount() public view returns (uint256){
        return transactionCounter;
    }
}
