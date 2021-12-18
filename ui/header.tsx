import { Button, Card, Icon } from "@blueprintjs/core";
import { GitHubIcon } from "./custom-icons";
import { useDarkMode } from "./providers/dark-mode-provider";

export const Header = () => {
  const DarkMode = useDarkMode();

  const brandSection = (
    <div style={{ flex: 1, textAlign: "left" }}>
      <Button minimal large icon={<Icon icon="code-block" intent="primary" />}>
        Esolang Park
      </Button>
    </div>
  );

  const langSection = (
    <div style={{ flex: 0, textAlign: "center" }}>Brainfuck</div>
  );

  const infoSection = (
    <div style={{ flex: 1, textAlign: "right", paddingRight: 8 }}>
      <Button
        minimal
        icon={<Icon icon="moon" />}
        onClick={DarkMode.toggleDark}
      />
      <a href="https://github.com/nilaymaj/esolang-park">
        <Button minimal icon={<Icon icon={<GitHubIcon />} />} />
      </a>
    </div>
  );

  return (
    <div style={{ padding: 5 }}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
        }}
      >
        {brandSection}
        {langSection}
        {infoSection}
      </Card>
    </div>
  );
};