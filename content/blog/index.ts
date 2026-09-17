import type { PostInput } from "@/lib/blog";
import { channel } from "./channel";
import { clientLoyalty } from "./client-loyalty";
import { employeeRewards } from "./employee-rewards";
import { festive } from "./festive";
import { hrCulture } from "./hr-culture";
import { procurement } from "./procurement";
import { employeeRewards2 } from "./employee-rewards-2";
import { festive2 } from "./festive-2";
import { procurement2 } from "./procurement-2";
import { channel2 } from "./channel-2";
import { hrCulture2 } from "./hr-culture-2";
import { clientLoyalty2 } from "./client-loyalty-2";

export const posts: PostInput[] = [...employeeRewards, ...festive, ...procurement, ...channel, ...hrCulture, ...clientLoyalty, ...employeeRewards2, ...festive2, ...procurement2, ...channel2, ...hrCulture2, ...clientLoyalty2];
