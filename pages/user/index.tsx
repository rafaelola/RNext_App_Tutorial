import NextLink from "next/link";
import {Flex, Heading, Link} from "@chakra-ui/core/dist";

const UserPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center" margin={4}>
          <Heading as="h1" size="2xl" marginY="2rem">
                User Page
            </Heading>
            <NextLink href="/" passHref>
                <Link>
                    Go back home
                </Link>
            </NextLink>
        </Flex>

   );
};
export default UserPage;
