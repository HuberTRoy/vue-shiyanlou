import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type Config = AxiosRequestConfig & {
  alert?: boolean;
  loading?: boolean;
  loadingText?: string;
};

export type CommonRes<T = any> = T

type Plugin = {
  request?: (config: Config) => Config;
  response?: (data: AxiosResponse<CommonRes>) => AxiosResponse<CommonRes>;
};

const instance = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || "") + "/api/v2",
});

const usePlugin = (plugin: Plugin) => {
  if (plugin.request) {
    instance.interceptors.request.use(plugin.request);
  }

  if (plugin.response) {
    instance.interceptors.response.use(plugin.response);
  }
};


const loadingPlugin: Plugin = {
  request: config => {
    if (config.loading) {
      console.log("loading")
    }

    return config;
  },
  response: data => {
    const config = data.config as Config;
    if (config.loading) {
      console.log("clear loading")
    }

    return data;
  },
};

const alertPlugin: Plugin = {
  response: data => {
    const config = data.config as Config;
    if (config.alert === true) {
      if (data.status !== 200) {
       console.error("error")
      }
    }
    return data;
  },
};

usePlugin(loadingPlugin);
usePlugin(alertPlugin);

const afterResponse = (res: AxiosResponse<CommonRes>): CommonRes => {
  return {
    status: res.data.status,
    data: res.data.data,
  };
};

instance.interceptors.response.use(afterResponse);

type Request<R, T> = (params?: T, config?: Config) => Promise<CommonRes<R>>;
type RequestMethod = <R, T = any>(url: string, config?: Config) => Request<R, T>;


const wrapperRequest = (method: 'get' | 'post'): RequestMethod => {
  // 默认如果有错误会自动弹出toast，后面也可以关闭。
  return <R, T = any>(url: string, config: Config = { alert: true }) => {
    return (params?: T, requestConfig?: Config) => {
      let realParams = [
        url,
        params,
        {
          ...config,
          ...requestConfig,
        },
      ];
      if (method.toLowerCase() === "get") {
        realParams = [url, { params: params, ...config, ...requestConfig }];
      }
      return instance[method]<any, CommonRes<R>>(...realParams as [string, any]);
    };
  };
};

export const post = wrapperRequest("post");
export const get = wrapperRequest("get");
`