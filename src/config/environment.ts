import schema from './environment.schema';

interface IWindow {
  env: Record<string, string>;
}

const getWindow = () => window as any as IWindow;

const getEnvironment = () => {
  const { env: windowEnv } = getWindow();

  if (windowEnv) {
    return windowEnv;
  }

  const fromProcess = process.env;

  if (fromProcess) {
    return fromProcess;
  }
};

const getWindowConfig = () => {
  const env = getEnvironment();

  if (!env) {
    // eslint-disable-next-line no-console
    console.error(`Missing environment config`);
    throw new Error('Missing environment config');
  }

  const { value, error } = schema.validate(env, { stripUnknown: true });

  if (error) {
    // eslint-disable-next-line no-console
    console.error(`Invalid environment config: ${error.message}`);
    throw new Error('Invalid environment config');
  }

  return {
    REACT_APP_GRAPH_URL: value.REACT_APP_GRAPH_URL,
  };
};

const environment = getWindowConfig();

export default environment;
