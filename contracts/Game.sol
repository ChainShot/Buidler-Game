//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.8;

contract Game {
  constructor() public payable {}

  event winner(address winner);
  
  function win() public {
    emit winner(msg.sender);
    msg.sender.transfer(address(this).balance);
  }
}
