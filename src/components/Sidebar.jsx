import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import TopTenCoins from "./topTenCoins/TopTenCoins";
import Link from "next/link";

export const Sidebar = () => (
  <>
    <Flex justifyContent="center" maxW={"15vv"}>
      <Heading> Top 10 Coins </Heading>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <TopTenCoins />
      <Box p={4}>
        <Image
          borderRadius={"md"}
          src="https://alternative.me/crypto/fear-and-greed-index.png"
          alt="Latest Crypto Fear & Greed Index"
        />
      </Box>

      <Box>
        <Link href="https://amzn.to/401Hwlg">
          <Image
            m={"10px auto"}
            src="./images/ledgerAd.jpg"
            with={"200px"}
            height={"400px"}
            borderRadius={"md"}
          />
        </Link>
      </Box>
    </Flex>
  </>
);
