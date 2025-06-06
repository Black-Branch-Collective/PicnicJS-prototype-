// /core/types/plugins.ts
// TODO: refactor 7
import type { IncomingEvent } from './routes';

interface InternalPlugin {
  pluginType?: string; // module, config, bridge, app
  handleEvent?: (event: IncomingEvent) => Promise<void>;

  // WARN: is this supposed to be this kind of a Promise?
  // ANSWER: shutdown is a garbage collection process but also \
  // to `await` completion of the loop before shutting the plugin.
  shutdown?: () => Promise<void>;
}

interface Bridge extends InternalPlugin {
  readonly bridgeName: string;
}

interface Module extends InternalPlugin {
  readonly moduleName: string;
}

interface App extends InternalPlugin {
  readonly appName: string;
}

interface Config extends InternalPlugin {
  readonly configName: string;
}

export type {
  InternalPlugin,
  Bridge,
  Module,
  App,
  Config
};
