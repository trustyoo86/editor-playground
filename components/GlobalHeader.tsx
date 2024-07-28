import { Badge, Button, Flex, Heading, Separator } from "@radix-ui/themes";

function GlobalHeader() {
  return (
    <Flex
      px="4"
      align="center"
      justify="between"
      style={{
        height: 'var(--space-8)',
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--accent-a6)',
        zIndex: 200,
      }}>
      <Flex gap="4" align="center">
        <Flex gap="2" align="center">
          <Heading size="4">Editor Playground</Heading>
          <Badge highContrast variant="solid">
            alpha
          </Badge>
        </Flex>

        <Separator orientation="vertical" />

        <Flex gap="2" align="center">
          <Button variant="ghost">
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GlobalHeader;
