/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import { AuditLogHeader, auditLogHeaderBeet } from "./AuditLogHeader";
import { FillEvent, fillEventBeet } from "./FillEvent";
import { PlaceEvent, placeEventBeet } from "./PlaceEvent";
import { ReduceEvent, reduceEventBeet } from "./ReduceEvent";
import { EvictEvent, evictEventBeet } from "./EvictEvent";
import { FillSummaryEvent, fillSummaryEventBeet } from "./FillSummaryEvent";
import { FeeEvent, feeEventBeet } from "./FeeEvent";
import { TimeInForceEvent, timeInForceEventBeet } from "./TimeInForceEvent";
import { ExpiredOrderEvent, expiredOrderEventBeet } from "./ExpiredOrderEvent";
/**
 * This type is used to derive the {@link PhoenixMarketEvent} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link PhoenixMarketEvent} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type PhoenixMarketEventRecord = {
  Uninitialized: void /* scalar variant */;
  Header: { fields: [AuditLogHeader] };
  Fill: { fields: [FillEvent] };
  Place: { fields: [PlaceEvent] };
  Reduce: { fields: [ReduceEvent] };
  Evict: { fields: [EvictEvent] };
  FillSummary: { fields: [FillSummaryEvent] };
  Fee: { fields: [FeeEvent] };
  TimeInForce: { fields: [TimeInForceEvent] };
  ExpiredOrder: { fields: [ExpiredOrderEvent] };
};

/**
 * Union type respresenting the PhoenixMarketEvent data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isPhoenixMarketEvent*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type PhoenixMarketEvent =
  beet.DataEnumKeyAsKind<PhoenixMarketEventRecord>;

export const isPhoenixMarketEventUninitialized = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Uninitialized" } =>
  x.__kind === "Uninitialized";
export const isPhoenixMarketEventHeader = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Header" } => x.__kind === "Header";
export const isPhoenixMarketEventFill = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Fill" } => x.__kind === "Fill";
export const isPhoenixMarketEventPlace = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Place" } => x.__kind === "Place";
export const isPhoenixMarketEventReduce = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Reduce" } => x.__kind === "Reduce";
export const isPhoenixMarketEventEvict = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Evict" } => x.__kind === "Evict";
export const isPhoenixMarketEventFillSummary = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "FillSummary" } =>
  x.__kind === "FillSummary";
export const isPhoenixMarketEventFee = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "Fee" } => x.__kind === "Fee";
export const isPhoenixMarketEventTimeInForce = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "TimeInForce" } =>
  x.__kind === "TimeInForce";
export const isPhoenixMarketEventExpiredOrder = (
  x: PhoenixMarketEvent
): x is PhoenixMarketEvent & { __kind: "ExpiredOrder" } =>
  x.__kind === "ExpiredOrder";

/**
 * @category userTypes
 * @category generated
 */
export const phoenixMarketEventBeet = beet.dataEnum<PhoenixMarketEventRecord>([
  ["Uninitialized", beet.unit],
  [
    "Header",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Header"]>(
      [["fields", beet.fixedSizeTuple([auditLogHeaderBeet])]],
      'PhoenixMarketEventRecord["Header"]'
    ),
  ],
  [
    "Fill",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Fill"]>(
      [["fields", beet.fixedSizeTuple([fillEventBeet])]],
      'PhoenixMarketEventRecord["Fill"]'
    ),
  ],
  [
    "Place",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Place"]>(
      [["fields", beet.fixedSizeTuple([placeEventBeet])]],
      'PhoenixMarketEventRecord["Place"]'
    ),
  ],
  [
    "Reduce",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Reduce"]>(
      [["fields", beet.fixedSizeTuple([reduceEventBeet])]],
      'PhoenixMarketEventRecord["Reduce"]'
    ),
  ],
  [
    "Evict",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Evict"]>(
      [["fields", beet.fixedSizeTuple([evictEventBeet])]],
      'PhoenixMarketEventRecord["Evict"]'
    ),
  ],
  [
    "FillSummary",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["FillSummary"]>(
      [["fields", beet.fixedSizeTuple([fillSummaryEventBeet])]],
      'PhoenixMarketEventRecord["FillSummary"]'
    ),
  ],
  [
    "Fee",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["Fee"]>(
      [["fields", beet.fixedSizeTuple([feeEventBeet])]],
      'PhoenixMarketEventRecord["Fee"]'
    ),
  ],
  [
    "TimeInForce",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["TimeInForce"]>(
      [["fields", beet.fixedSizeTuple([timeInForceEventBeet])]],
      'PhoenixMarketEventRecord["TimeInForce"]'
    ),
  ],
  [
    "ExpiredOrder",
    new beet.BeetArgsStruct<PhoenixMarketEventRecord["ExpiredOrder"]>(
      [["fields", beet.fixedSizeTuple([expiredOrderEventBeet])]],
      'PhoenixMarketEventRecord["ExpiredOrder"]'
    ),
  ],
]) as beet.FixableBeet<PhoenixMarketEvent, PhoenixMarketEvent>;