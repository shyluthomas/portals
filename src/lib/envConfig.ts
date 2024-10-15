
interface EnvConfig {
    key: string;
    envKey: string;
    type?: string | boolean;
}

const getConfig = <T extends EnvConfig[]>(config: T) => {
    return Object.fromEntries(
        config.map(({key, envKey, type = 'string'}) => {
            let value = process.env[envKey];
            if(value === undefined && process.env.NODE_ENV !== 'test') {
                value= '';
            }
            return [key, type !== 'boolean' ? value : value === 'true' ];
        })
    );
}
interface PublicEnvConfig {
    nextApiBase: string;
}
const PublicEnvConfigData = [
    { key: 'nextApiBase', envKey: 'NEXT_API_BASE' },
];

export const getPublicEnvConfig = (): PublicEnvConfig => {
    return getConfig(PublicEnvConfigData) as unknown as PublicEnvConfig;
}


interface PrivateEnvConfig {
    mockApienabled: boolean;
    nextauthUrl: string;
    nextauthSecret: string;
}

const configData: EnvConfig[] = [
    {key: 'mockApienabled', envKey: 'MOCK_API_ENABLED', type: 'boolean'},
    {key: 'nextauthUrl', envKey: 'NEXT_AUTH_URL'},
    {key: 'nextauthSecret', envKey: 'NEXT_AUTH_SECRET'}
];
export const getPrivateEnvConfig = (): PrivateEnvConfig => {
    return getConfig(configData) as unknown as PrivateEnvConfig
}