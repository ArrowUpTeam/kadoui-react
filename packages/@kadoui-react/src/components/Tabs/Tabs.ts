import { TabsTab } from "./TabsTab";
import { TabsList } from "./TabsList";
import { TabsRoot } from "./TabsRoot";
import { TabsPanel } from "./TabsPanel";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel
});