import { Models } from "kurimudb";
import { CookieDriver } from "kurimudb-driver-cookie";

export default new (class Cookie extends Models.keyValue<
  Record<string, any>,
  null
> {
  constructor() {
    super({
      name: "cookie",
      type: "string",
      driver: CookieDriver,
    });
  }
})();
