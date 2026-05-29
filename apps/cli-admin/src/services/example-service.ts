import { Effect, Layer, ServiceMap } from "effect";

/**
 * ExampleService — Effect service for CLI commands (Effect 4 ServiceMap pattern).
 * Wire with Layer.merge / Effect.provide in command handlers as you add real dependencies.
 */
export class ExampleService extends ServiceMap.Service<ExampleService, {
  readonly ready: () => Effect.Effect<void>;
}>()("ExampleService") {}

export const ExampleServiceLive = Layer.succeed(ExampleService)({
  ready: () => Effect.void,
});

export function createExampleService() {
  return {
    ready: () => Effect.void,
  };
}

export type ExampleServiceApi = ReturnType<typeof createExampleService>;
