import { ChangeEvent, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { LCDClient } from "@terra-money/terra.js";

import { Modal } from "@/common";

const terra = new LCDClient({
  URL: "https://lcd.terra.dev",
  chainID: "columbus-5",
}) as any;

const contractAddress = "terra1my4sy2gt5suu9fgt8wdkm7ywrd5jzg86692as2";

export const Wallets = () => {
  // **Props
  const { push } = useRouter();

  // **Local state
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsError(false);
  };

  const getTokens = async () => {
    try {
      setIsError(false);
      const limit = 30; //max 30
      const tokens = [];
      let startAfter = null;

      do {
        let resp = (await terra.wasm.contractQuery(contractAddress, {
          tokens: { owner: inputValue, limit: limit, start_after: startAfter },
        })) as any;
        if (resp.tokens.length > 0) {
          tokens.push(...resp.tokens);
          startAfter = resp.tokens[resp.tokens.length - 1];
        } else {
          startAfter = null;
        }
      } while (startAfter);

      sessionStorage.setItem("tokens", JSON.stringify(tokens));

      push({
        pathname: "/agents",
        query: {
          update: "yes",
        },
      });
      setIsOpened(false);
      setIsConnected(true);
    } catch (err: any) {
      setIsError(true);
      setIsConnected(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    sessionStorage?.removeItem("tokens");
    push({
      pathname: "/agents",
      query: {
        update: "no",
      },
    });
  };

  useEffect(() => {
    if (sessionStorage?.getItem("tokens")) {
      setIsConnected(true);
    }
  }, []);

  return (
    <div className="header__wallets">
      <button
        className="header__wallets-btn"
        onClick={isConnected ? disconnectWallet : openModal}
      >
        {isConnected ? "Disconnect wallet" : "Connect wallet"}
      </button>
      <Modal visible={isOpened} cancelHandler={setIsOpened}>
        <div className="header__wallets-modal-input">
          <input
            value={inputValue}
            onInput={inputHandler}
            placeholder="Type your wallet address"
          />
        </div>
        {isError && (
          <div className="header__wallets-modal-error">
            Your wallet address is not correct
          </div>
        )}
        <button
          className="header__wallets-btn header__wallets-modal-btn"
          onClick={getTokens}
        >
          Connect wallet
        </button>
      </Modal>
    </div>
  );
};
