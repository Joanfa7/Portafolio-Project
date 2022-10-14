import React from "react";
import { useEffect, useState } from "react";
import {
  VoteroBallotContract,
  connectWallet,
  updateMessage,
  loudCurrentMessage,
  getCurrentWalletConnected,
} from "./util/interact.js";
