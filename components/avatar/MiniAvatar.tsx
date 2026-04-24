import type { AvatarProportions } from "@/lib/helpers/avatarCalculator";

type MiniAvatarProps = {
  proportions: AvatarProportions;
};

export function MiniAvatar({ proportions }: MiniAvatarProps) {
  return (
    <div className="flex min-h-[460px] items-center justify-center rounded-3xl bg-slate-100 p-8">
      <div className="flex flex-col items-center">
        <div className="mb-3 h-20 w-20 rounded-full bg-slate-300 shadow-sm" />

        <div className="relative flex flex-col items-center">
          <div
            className="rounded-t-[70px] bg-slate-400 shadow-sm"
            style={{
              width: `${proportions.shoulderWidth}px`,
              height: `${proportions.bodyHeight * 0.36}px`,
            }}
          />

          <div
            className="bg-slate-500"
            style={{
              width: `${proportions.waistWidth}px`,
              height: `${proportions.bodyHeight * 0.22}px`,
            }}
          />

          <div
            className="rounded-b-[50px] bg-slate-400 shadow-sm"
            style={{
              width: `${proportions.hipWidth}px`,
              height: `${proportions.bodyHeight * 0.2}px`,
            }}
          />

          <div className="mt-2 flex gap-4">
            <div
              className="rounded-b-full bg-slate-300"
              style={{
                width: "32px",
                height: `${proportions.legHeight}px`,
              }}
            />
            <div
              className="rounded-b-full bg-slate-300"
              style={{
                width: "32px",
                height: `${proportions.legHeight}px`,
              }}
            />
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-slate-600">
          Measurement-based mini avatar
        </p>
      </div>
    </div>
  );
}