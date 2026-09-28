const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["/soya-ui-docs/_app/immutable/chunks/BDhWHrEw.js","/soya-ui-docs/_app/immutable/chunks/fs03ZRsb.js"])))=>i.map(i=>d[i]);
import{A as e,At as t,Ct as n,D as r,I as i,J as a,K as o,M as s,Nt as c,P as l,St as u,Z as d,a as f,at as p,ct as m,et as h,ft as g,h as _,jt as v,kt as y,l as b,mt as x,n as S,ot as C,rt as w,s as T,st as E,tt as D,ut as O,w as k,z as A}from"../chunks/fs03ZRsb.js";import{t as j}from"../chunks/HclGiUj8.js";import"../chunks/xihTtKlq.js";import{t as M}from"../chunks/CyyqgG46.js";import{n as N}from"../chunks/qGf02Wcn.js";import{t as P}from"../chunks/RhlqY4Vh.js";import{t as F}from"../chunks/CqGZGrQU.js";import{t as I}from"../chunks/GAwXwUEF.js";import{t as L}from"../chunks/CA_S8_pu.js";import{t as R}from"../chunks/CzDrjlpH.js";import{t as z}from"../chunks/CHdpLLp6.js";import{t as B}from"../chunks/Ciq4j09H.js";import{t as V}from"../chunks/cDqDzzXG.js";import{t as H}from"../chunks/BsZeVic5.js";import{a as U,o as W}from"../chunks/CqF-7AzY.js";import{n as G}from"../chunks/odDRjDlP.js";import{n as K,t as q}from"../chunks/CsI9XhIz.js";import{t as J}from"../chunks/4r2F5F1P.js";import{t as Y}from"../chunks/DGCVxSLx.js";var X=c({entries:()=>Z,load:()=>ee}),ee=({params:e})=>(W.some(t=>t.slug===e.slug)||J(404,`Recipe not found.`),{slug:e.slug});function Z(){return W.map(({slug:e})=>({slug:e}))}var Q={"date-picker":{ko:`<script lang="ts">
  import { Button, Calendar, Popover } from 'soya-ui';
  import type { CalendarValue } from 'soya-ui';

  let open = $state(false);
  let value = $state<CalendarValue>(new Date(2026, 8, 24));
  let formatted = $derived(
    value instanceof Date
      ? new Intl.DateTimeFormat('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(value)
      : '날짜를 선택하세요',
  );
<\/script>

<div class="date-picker-recipe">
  <Popover bind:open align="start">
    {#snippet trigger(props)}
      <Button {...props} variant="secondary" aria-label={'날짜 선택'}>
        {formatted}
      </Button>
    {/snippet}
    <Calendar
      mode="single"
      bind:value
      locale={'ko-KR'}
      label={'예약 날짜'}
      previousMonthLabel={'이전 달'}
      nextMonthLabel={'다음 달'}
      onvaluechange={(next) => {
        if (next instanceof Date) open = false;
      }}
    />
  </Popover>
  <small aria-live="polite">{'선택한 날짜'}: {formatted}</small>
</div>

<style lang="scss">
  .date-picker-recipe {
    display: grid;
    justify-items: start;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .date-picker-recipe small {
    color: var(--soya-text-secondary);
  }
</style>
`,en:`<script lang="ts">
  import { Button, Calendar, Popover } from 'soya-ui';
  import type { CalendarValue } from 'soya-ui';

  let open = $state(false);
  let value = $state<CalendarValue>(new Date(2026, 8, 24));
  let formatted = $derived(
    value instanceof Date
      ? new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(value)
      : 'Choose a date',
  );
<\/script>

<div class="date-picker-recipe">
  <Popover bind:open align="start">
    {#snippet trigger(props)}
      <Button {...props} variant="secondary" aria-label={'Choose date'}>
        {formatted}
      </Button>
    {/snippet}
    <Calendar
      mode="single"
      bind:value
      locale={'en-US'}
      label={'Reservation date'}
      previousMonthLabel={'Previous month'}
      nextMonthLabel={'Next month'}
      onvaluechange={(next) => {
        if (next instanceof Date) open = false;
      }}
    />
  </Popover>
  <small aria-live="polite">{'Selected date'}: {formatted}</small>
</div>

<style lang="scss">
  .date-picker-recipe {
    display: grid;
    justify-items: start;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .date-picker-recipe small {
    color: var(--soya-text-secondary);
  }
</style>
`},"date-range-filter":{ko:`<script lang="ts">
  import { Button, Field, Input } from 'soya-ui';

  let presets = $derived([
    { id: 'week', label: '최근 7일', start: '2026-09-17', end: '2026-09-23' },
    { id: 'month', label: '최근 30일', start: '2026-08-25', end: '2026-09-23' },
    {
      id: 'current-month',
      label: '이번 달',
      start: '2026-09-01',
      end: '2026-09-23',
    },
  ]);
  const fixtureToday = '2026-09-23';
  const initialRange = { start: '2026-09-17', end: fixtureToday };
  let start = $state(initialRange.start);
  let end = $state(initialRange.end);
  let invalidOrder = $derived(Boolean(start && end && start > end));
  let activePreset = $derived(
    presets.find((preset) => preset.start === start && preset.end === end)?.id ?? 'custom',
  );
  let activePresetLabel = $derived(
    presets.find((preset) => preset.id === activePreset)?.label ?? '직접 입력',
  );

  function applyPreset(preset: (typeof presets)[number]) {
    start = preset.start;
    end = preset.end;
  }

  function resetRange() {
    start = initialRange.start;
    end = initialRange.end;
  }
<\/script>

<div class="example-stack date-recipe">
  <div class="preset-row" role="group" aria-label={'기간 프리셋'}>
    {#each presets as preset (preset.id)}
      <Button
        size="sm"
        variant={activePreset === preset.id ? 'primary' : 'secondary'}
        aria-pressed={activePreset === preset.id}
        onclick={() => applyPreset(preset)}>{preset.label}</Button
      >
    {/each}
    <Button size="sm" variant="ghost" onclick={resetRange}>{'기간 초기화'}</Button>
  </div>
  <div class="date-fields">
    <Field
      label={'시작일'}
      required
      error={invalidOrder ? '시작일은 종료일보다 늦을 수 없습니다.' : undefined}
    >
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          bind:value={start}
          type="date"
          aria-describedby={describedBy}
          invalid={invalid || invalidOrder}
          required
        />
      {/snippet}
    </Field>
    <Field label={'종료일'} required>
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          bind:value={end}
          type="date"
          aria-describedby={describedBy}
          invalid={invalid || invalidOrder}
          required
        />
      {/snippet}
    </Field>
  </div>
</div>

<small aria-live="polite">
  <strong>{invalidOrder ? '날짜 순서를 확인하세요' : activePresetLabel}</strong>
  · {start} → {end}
</small>

<style lang="scss">
  .date-recipe,
  .date-fields {
    min-inline-size: 0;
  }
  .preset-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--soya-space-2);
  }
  .date-fields {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--soya-space-4);
  }
  @media (max-width: 32rem) {
    .date-fields {
      grid-template-columns: 1fr;
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Button, Field, Input } from 'soya-ui';

  let presets = $derived([
    { id: 'week', label: 'Last 7 days', start: '2026-09-17', end: '2026-09-23' },
    { id: 'month', label: 'Last 30 days', start: '2026-08-25', end: '2026-09-23' },
    {
      id: 'current-month',
      label: 'This month',
      start: '2026-09-01',
      end: '2026-09-23',
    },
  ]);
  const fixtureToday = '2026-09-23';
  const initialRange = { start: '2026-09-17', end: fixtureToday };
  let start = $state(initialRange.start);
  let end = $state(initialRange.end);
  let invalidOrder = $derived(Boolean(start && end && start > end));
  let activePreset = $derived(
    presets.find((preset) => preset.start === start && preset.end === end)?.id ?? 'custom',
  );
  let activePresetLabel = $derived(
    presets.find((preset) => preset.id === activePreset)?.label ?? 'Custom range',
  );

  function applyPreset(preset: (typeof presets)[number]) {
    start = preset.start;
    end = preset.end;
  }

  function resetRange() {
    start = initialRange.start;
    end = initialRange.end;
  }
<\/script>

<div class="example-stack date-recipe">
  <div class="preset-row" role="group" aria-label={'Date range presets'}>
    {#each presets as preset (preset.id)}
      <Button
        size="sm"
        variant={activePreset === preset.id ? 'primary' : 'secondary'}
        aria-pressed={activePreset === preset.id}
        onclick={() => applyPreset(preset)}>{preset.label}</Button
      >
    {/each}
    <Button size="sm" variant="ghost" onclick={resetRange}>{'Reset range'}</Button>
  </div>
  <div class="date-fields">
    <Field
      label={'Start date'}
      required
      error={invalidOrder ? 'Start date cannot be later than end date.' : undefined}
    >
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          bind:value={start}
          type="date"
          aria-describedby={describedBy}
          invalid={invalid || invalidOrder}
          required
        />
      {/snippet}
    </Field>
    <Field label={'End date'} required>
      {#snippet children({ id, describedBy, invalid })}
        <Input
          {id}
          bind:value={end}
          type="date"
          aria-describedby={describedBy}
          invalid={invalid || invalidOrder}
          required
        />
      {/snippet}
    </Field>
  </div>
</div>

<small aria-live="polite">
  <strong>{invalidOrder ? 'Check the date order' : activePresetLabel}</strong>
  · {start} → {end}
</small>

<style lang="scss">
  .date-recipe,
  .date-fields {
    min-inline-size: 0;
  }
  .preset-row {
    display: flex;
    flex-wrap: wrap;
    gap: var(--soya-space-2);
  }
  .date-fields {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--soya-space-4);
  }
  @media (max-width: 32rem) {
    .date-fields {
      grid-template-columns: 1fr;
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"inline-confirm":{ko:`<script lang="ts">
  import { tick } from 'svelte';
  import { Alert, Button, Card, EmptyState } from 'soya-ui';

  let confirming = $state(false);
  let removed = $state(false);
  let container: HTMLElement;

  async function focusAction(name: 'delete' | 'cancel' | 'restore') {
    await tick();
    container.querySelector<HTMLButtonElement>(\`[data-inline-action="\${name}"]\`)?.focus();
  }

  async function askToRemove() {
    confirming = true;
    await focusAction('cancel');
  }

  async function cancelRemove() {
    confirming = false;
    await focusAction('delete');
  }

  async function removeFixture() {
    removed = true;
    confirming = false;
    await focusAction('restore');
  }

  async function restoreFixture() {
    removed = false;
    await focusAction('delete');
  }
<\/script>

<div bind:this={container} class="example-stack inline-confirm-recipe">
  {#if removed}
    <EmptyState
      title={'예제 작업을 제거했습니다'}
      description={'실제 API나 외부 데이터는 변경하지 않았습니다.'}
    >
      {#snippet actions()}<Button
          data-inline-action="restore"
          size="sm"
          variant="secondary"
          onclick={restoreFixture}>{'복원'}</Button
        >{/snippet}
    </EmptyState>
  {:else}
    <Card class="job-row" padding="compact">
      <span><strong>{'검색 색인 검증'}</strong><small>run-1048 · {'로컬 예제 데이터'}</small></span>
      {#if !confirming}
        <Button data-inline-action="delete" size="sm" variant="danger" onclick={askToRemove}
          >{'삭제'}</Button
        >
      {/if}
    </Card>
    {#if confirming}
      <Alert
        tone="warning"
        title={'이 작업을 목록에서 제거할까요?'}
        description={'현재 행의 맥락을 유지한 채 한 번 더 확인합니다.'}
      >
        <div class="confirm-actions" role="group" aria-label={'예제 작업 삭제 확인'}>
          <Button data-inline-action="cancel" size="sm" variant="secondary" onclick={cancelRemove}
            >{'취소'}</Button
          >
          <Button size="sm" variant="danger" onclick={removeFixture}>{'제거 확인'}</Button>
        </div>
      </Alert>
    {/if}
  {/if}
</div>

<style lang="scss">
  .inline-confirm-recipe,
  :global(.job-row),
  :global(.job-row > span) {
    min-inline-size: 0;
  }
  :global(.job-row) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  :global(.job-row > span) {
    display: grid;
  }
  :global(.job-row) small {
    color: var(--soya-text-secondary);
  }
  .confirm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--soya-space-2);
    margin-block-start: var(--soya-space-3);
  }
  @media (max-width: 28rem) {
    :global(.job-row) {
      align-items: stretch;
      flex-direction: column;
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { tick } from 'svelte';
  import { Alert, Button, Card, EmptyState } from 'soya-ui';

  let confirming = $state(false);
  let removed = $state(false);
  let container: HTMLElement;

  async function focusAction(name: 'delete' | 'cancel' | 'restore') {
    await tick();
    container.querySelector<HTMLButtonElement>(\`[data-inline-action="\${name}"]\`)?.focus();
  }

  async function askToRemove() {
    confirming = true;
    await focusAction('cancel');
  }

  async function cancelRemove() {
    confirming = false;
    await focusAction('delete');
  }

  async function removeFixture() {
    removed = true;
    confirming = false;
    await focusAction('restore');
  }

  async function restoreFixture() {
    removed = false;
    await focusAction('delete');
  }
<\/script>

<div bind:this={container} class="example-stack inline-confirm-recipe">
  {#if removed}
    <EmptyState
      title={'Sample job removed'}
      description={'No real API or external data was changed.'}
    >
      {#snippet actions()}<Button
          data-inline-action="restore"
          size="sm"
          variant="secondary"
          onclick={restoreFixture}>{'Restore'}</Button
        >{/snippet}
    </EmptyState>
  {:else}
    <Card class="job-row" padding="compact">
      <span
        ><strong>{'Search index validation'}</strong><small>run-1048 · {'local sample data'}</small
        ></span
      >
      {#if !confirming}
        <Button data-inline-action="delete" size="sm" variant="danger" onclick={askToRemove}
          >{'Delete'}</Button
        >
      {/if}
    </Card>
    {#if confirming}
      <Alert
        tone="warning"
        title={'Remove this job from the list?'}
        description={'Confirm once more while keeping the current row in context.'}
      >
        <div class="confirm-actions" role="group" aria-label={'Confirm sample job deletion'}>
          <Button data-inline-action="cancel" size="sm" variant="secondary" onclick={cancelRemove}
            >{'Cancel'}</Button
          >
          <Button size="sm" variant="danger" onclick={removeFixture}>{'Confirm removal'}</Button>
        </div>
      </Alert>
    {/if}
  {/if}
</div>

<style lang="scss">
  .inline-confirm-recipe,
  :global(.job-row),
  :global(.job-row > span) {
    min-inline-size: 0;
  }
  :global(.job-row) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-4);
  }
  :global(.job-row > span) {
    display: grid;
  }
  :global(.job-row) small {
    color: var(--soya-text-secondary);
  }
  .confirm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--soya-space-2);
    margin-block-start: var(--soya-space-3);
  }
  @media (max-width: 28rem) {
    :global(.job-row) {
      align-items: stretch;
      flex-direction: column;
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"job-list-detail":{ko:`<script lang="ts">
  import { Badge, Button, Card, DescriptionList } from 'soya-ui';

  let jobs = $derived([
    {
      id: '1048',
      name: '검색 색인 검증',
      owner: '민지',
      status: 'ready',
      statusLabel: '준비됨',
      scope: 'Wiki · Post · Comment',
    },
    {
      id: '1047',
      name: '기관별 권한 스냅샷 비교',
      owner: '서준',
      status: 'running',
      statusLabel: '실행 중',
      scope: '42개 기관',
    },
    {
      id: '1046',
      name: '매우 긴 프로젝트 이름의 문서와 첨부 파일 접근 경로 정합성 확인',
      owner: '지우',
      status: 'queued',
      statusLabel: '대기',
      scope: 'Files · Links',
    },
  ]);
  let selectedId = $state('1048');
  let selected = $derived(jobs.find((job) => job.id === selectedId) ?? jobs[0]);
<\/script>

{#snippet primary()}
  <nav class="job-list" aria-label={'예제 작업'}>
    {#each jobs as job (job.id)}
      <Button
        variant={selectedId === job.id ? 'primary' : 'ghost'}
        aria-pressed={selectedId === job.id}
        onclick={() => (selectedId = job.id)}
      >
        <span><strong>{job.name}</strong><small>run-{job.id} · {job.owner}</small></span>
      </Button>
    {/each}
  </nav>
{/snippet}
{#snippet status()}<Badge tone={selected.status === 'ready' ? 'success' : 'neutral'}
    >{selected.statusLabel}</Badge
  >{/snippet}
{#snippet secondary()}
  <section class="job-detail" aria-live="polite">
    <h3>{selected.name}</h3>
    <DescriptionList
      label={\`\${selected.name} 상세\`}
      columns={1}
      items={[
        { term: '실행 ID', value: \`run-\${selected.id}\` },
        { term: '상태', value: status },
        { term: '담당자', value: selected.owner },
        { term: '범위', value: selected.scope },
      ]}
    />
  </section>
{/snippet}

<div class="example-stack job-detail-recipe">
  <Card class="job-panel" padding="compact" role="region" aria-labelledby="job-list-heading">
    <h3 id="job-list-heading">{'작업 선택'}</h3>
    {@render primary()}
  </Card>
  <Card class="job-panel" padding="compact" role="region" aria-labelledby="job-detail-heading">
    <h3 id="job-detail-heading">{'작업 상세'}</h3>
    {@render secondary()}
  </Card>
</div>

<style lang="scss">
  .job-detail-recipe {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    inline-size: min(100%, 58rem);
  }
  .job-detail-recipe :global(.job-panel) {
    display: grid;
    align-content: start;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .job-detail-recipe :global(.job-panel > h3) {
    margin: 0;
    font-size: var(--soya-type-body-size);
  }
  .job-list,
  .job-detail,
  .job-list span {
    display: grid;
    min-inline-size: 0;
  }
  .job-list {
    gap: var(--soya-space-2);
  }
  .job-list :global(.soya-button) {
    justify-content: start;
    block-size: auto;
    min-inline-size: 0;
    text-align: start;
    white-space: normal;
  }
  .job-list strong,
  .job-detail h3 {
    overflow-wrap: anywhere;
  }
  .job-list small {
    opacity: 0.78;
  }
  .job-detail {
    gap: var(--soya-space-3);
  }
  .job-detail h3 {
    margin: 0;
  }
  @media (max-width: 40rem) {
    .job-detail-recipe {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { Badge, Button, Card, DescriptionList } from 'soya-ui';

  let jobs = $derived([
    {
      id: '1048',
      name: 'Search index validation',
      owner: 'Minji',
      status: 'ready',
      statusLabel: 'Ready',
      scope: 'Wiki · Post · Comment',
    },
    {
      id: '1047',
      name: 'Compare organization permission snapshots',
      owner: 'Seojun',
      status: 'running',
      statusLabel: 'Running',
      scope: '42 organizations',
    },
    {
      id: '1046',
      name: 'Validate document and attachment paths for a project with a very long name',
      owner: 'Jiwoo',
      status: 'queued',
      statusLabel: 'Queued',
      scope: 'Files · Links',
    },
  ]);
  let selectedId = $state('1048');
  let selected = $derived(jobs.find((job) => job.id === selectedId) ?? jobs[0]);
<\/script>

{#snippet primary()}
  <nav class="job-list" aria-label={'Sample jobs'}>
    {#each jobs as job (job.id)}
      <Button
        variant={selectedId === job.id ? 'primary' : 'ghost'}
        aria-pressed={selectedId === job.id}
        onclick={() => (selectedId = job.id)}
      >
        <span><strong>{job.name}</strong><small>run-{job.id} · {job.owner}</small></span>
      </Button>
    {/each}
  </nav>
{/snippet}
{#snippet status()}<Badge tone={selected.status === 'ready' ? 'success' : 'neutral'}
    >{selected.statusLabel}</Badge
  >{/snippet}
{#snippet secondary()}
  <section class="job-detail" aria-live="polite">
    <h3>{selected.name}</h3>
    <DescriptionList
      label={\`\${selected.name} details\`}
      columns={1}
      items={[
        { term: 'Run ID', value: \`run-\${selected.id}\` },
        { term: 'Status', value: status },
        { term: 'Owner', value: selected.owner },
        { term: 'Scope', value: selected.scope },
      ]}
    />
  </section>
{/snippet}

<div class="example-stack job-detail-recipe">
  <Card class="job-panel" padding="compact" role="region" aria-labelledby="job-list-heading">
    <h3 id="job-list-heading">{'Job selection'}</h3>
    {@render primary()}
  </Card>
  <Card class="job-panel" padding="compact" role="region" aria-labelledby="job-detail-heading">
    <h3 id="job-detail-heading">{'Job details'}</h3>
    {@render secondary()}
  </Card>
</div>

<style lang="scss">
  .job-detail-recipe {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    inline-size: min(100%, 58rem);
  }
  .job-detail-recipe :global(.job-panel) {
    display: grid;
    align-content: start;
    gap: var(--soya-space-3);
    min-inline-size: 0;
  }
  .job-detail-recipe :global(.job-panel > h3) {
    margin: 0;
    font-size: var(--soya-type-body-size);
  }
  .job-list,
  .job-detail,
  .job-list span {
    display: grid;
    min-inline-size: 0;
  }
  .job-list {
    gap: var(--soya-space-2);
  }
  .job-list :global(.soya-button) {
    justify-content: start;
    block-size: auto;
    min-inline-size: 0;
    text-align: start;
    white-space: normal;
  }
  .job-list strong,
  .job-detail h3 {
    overflow-wrap: anywhere;
  }
  .job-list small {
    opacity: 0.78;
  }
  .job-detail {
    gap: var(--soya-space-3);
  }
  .job-detail h3 {
    margin: 0;
  }
  @media (max-width: 40rem) {
    .job-detail-recipe {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"load-more":{ko:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Badge, Button, Card, EmptyState } from 'soya-ui';

  let jobs = $derived([
    '검색 색인 검증',
    '기관별 권한 스냅샷 비교',
    '통합 검색 재현',
    'Wiki 문서 샘플링',
    '댓글 관계 점검',
    '파일 접근 경로 확인',
    '긴 이름의 엔터프라이즈 프로젝트 검색 결과 정합성 확인',
  ]);
  let visibleCount = $state(3);
  let loading = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  let visibleJobs = $derived(jobs.slice(0, visibleCount));
  let cursor = $derived(visibleCount < jobs.length ? \`cursor-\${visibleCount}\` : undefined);

  function loadMore() {
    if (loading || !cursor) return;
    loading = true;
    timer = setTimeout(() => {
      visibleCount = Math.min(jobs.length, visibleCount + 2);
      loading = false;
    }, 500);
  }

  function reset() {
    if (timer) clearTimeout(timer);
    visibleCount = 3;
    loading = false;
  }

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
<\/script>

<div class="example-stack load-more-recipe">
  <ul aria-label={'예제 작업 결과'}>
    {#each visibleJobs as job, index (\`\${index}-\${job}\`)}
      <li>
        <Card padding="compact"><span>{job}</span><Badge tone="neutral">#{index + 1}</Badge></Card>
      </li>
    {/each}
  </ul>
  {#if cursor}
    <Button {loading} disabled={loading} onclick={loadMore}>
      {loading ? '다음 결과를 불러오는 중' : '결과 더 보기'}
    </Button>
  {:else}
    <EmptyState
      title={'모든 결과를 불러왔습니다'}
      description={'다음 페이지를 가리키는 값이 없으면 추가 요청을 보내지 않습니다.'}
    >
      {#snippet actions()}<Button size="sm" variant="secondary" onclick={reset}
          >{'예제 초기화'}</Button
        >{/snippet}
    </EmptyState>
  {/if}
</div>

<small aria-live="polite">{'다음 커서:'} {cursor ?? '없음'}</small>

<style lang="scss">
  .load-more-recipe,
  .load-more-recipe ul,
  .load-more-recipe li {
    min-inline-size: 0;
  }
  .load-more-recipe ul {
    display: grid;
    gap: var(--soya-space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .load-more-recipe li :global(.soya-card) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-3);
  }
  .load-more-recipe span {
    min-inline-size: 0;
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`,en:`<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Badge, Button, Card, EmptyState } from 'soya-ui';

  let jobs = $derived([
    'Search index validation',
    'Compare organization permission snapshots',
    'Reproduce unified search',
    'Sample wiki documents',
    'Check comment relationships',
    'Verify file access paths',
    'Validate search results for an enterprise project with a long name',
  ]);
  let visibleCount = $state(3);
  let loading = $state(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  let visibleJobs = $derived(jobs.slice(0, visibleCount));
  let cursor = $derived(visibleCount < jobs.length ? \`cursor-\${visibleCount}\` : undefined);

  function loadMore() {
    if (loading || !cursor) return;
    loading = true;
    timer = setTimeout(() => {
      visibleCount = Math.min(jobs.length, visibleCount + 2);
      loading = false;
    }, 500);
  }

  function reset() {
    if (timer) clearTimeout(timer);
    visibleCount = 3;
    loading = false;
  }

  onDestroy(() => {
    if (timer) clearTimeout(timer);
  });
<\/script>

<div class="example-stack load-more-recipe">
  <ul aria-label={'Sample job results'}>
    {#each visibleJobs as job, index (\`\${index}-\${job}\`)}
      <li>
        <Card padding="compact"><span>{job}</span><Badge tone="neutral">#{index + 1}</Badge></Card>
      </li>
    {/each}
  </ul>
  {#if cursor}
    <Button {loading} disabled={loading} onclick={loadMore}>
      {loading ? 'Loading more results' : 'Load more results'}
    </Button>
  {:else}
    <EmptyState
      title={'All results loaded'}
      description={'No additional request is sent without a cursor.'}
    >
      {#snippet actions()}<Button size="sm" variant="secondary" onclick={reset}
          >{'Reset example'}</Button
        >{/snippet}
    </EmptyState>
  {/if}
</div>

<small aria-live="polite">{'Next cursor:'} {cursor ?? 'None'}</small>

<style lang="scss">
  .load-more-recipe,
  .load-more-recipe ul,
  .load-more-recipe li {
    min-inline-size: 0;
  }
  .load-more-recipe ul {
    display: grid;
    gap: var(--soya-space-2);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .load-more-recipe li :global(.soya-card) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--soya-space-3);
  }
  .load-more-recipe span {
    min-inline-size: 0;
    overflow-wrap: anywhere;
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }
</style>
`},"log-panel":{ko:`<script lang="ts">
  import { Button, Checkbox, CodeBlock } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  const allLines = [
    '14:32:08 INFO  fixture run-1048 started',
    '14:32:09 INFO  loaded 1,240 searchable records',
    '14:32:10 WARN  institution alpha returned a delayed snapshot',
    '14:32:11 INFO  permission comparison completed',
    '14:32:12 ERROR sample document path was not found',
    '14:32:13 INFO  fixture run finished with 1 warning and 1 sampled error',
  ];
  let wrap = $state(false);
  let errorsOnly = $state(false);
  let code = $derived(allLines.filter((line) => !errorsOnly || line.includes('ERROR')).join('\\n'));
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    const source = code;
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(source, 'bash');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

<div class="example-stack log-panel-recipe">
  <div class="example-controls">
    <Checkbox bind:checked={wrap}>{'긴 로그 줄바꿈'}</Checkbox>
    <Button size="sm" variant="secondary" onclick={() => (errorsOnly = !errorsOnly)}>
      {errorsOnly ? '전체 로그 보기' : '오류만 보기'}
    </Button>
  </div>
  <CodeBlock
    {code}
    language="bash"
    label={errorsOnly ? '오류 로그' : '실행 로그'}
    {wrap}
    lineNumbers
    copyLabel={'표시한 로그 복사'}
    copiedLabel={'로그 복사됨'}
    copyErrorLabel={'로그를 복사할 수 없음'}
    {highlightedLines}
  />
</div>

<small aria-live="polite">{code.split('\\n').length}{'줄'}</small>

<style>
  .log-panel-recipe {
    inline-size: min(100%, 48rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-controls {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
    padding: var(--soya-space-3);
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .example-controls > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .example-controls :global(.soya-check) {
    align-items: center;
    min-block-size: var(--soya-control-height);
  }
</style>
`,en:`<script lang="ts">
  import { Button, Checkbox, CodeBlock } from 'soya-ui';
  import type { CodeTokenLine } from 'soya-ui';

  const allLines = [
    '14:32:08 INFO  fixture run-1048 started',
    '14:32:09 INFO  loaded 1,240 searchable records',
    '14:32:10 WARN  institution alpha returned a delayed snapshot',
    '14:32:11 INFO  permission comparison completed',
    '14:32:12 ERROR sample document path was not found',
    '14:32:13 INFO  fixture run finished with 1 warning and 1 sampled error',
  ];
  let wrap = $state(false);
  let errorsOnly = $state(false);
  let code = $derived(allLines.filter((line) => !errorsOnly || line.includes('ERROR')).join('\\n'));
  let highlightedLines = $state<CodeTokenLine[] | undefined>(undefined);

  $effect(() => {
    const source = code;
    let current = true;
    void import('soya-ui/code-block/shiki')
      .then(async ({ highlightCode }) => {
        const lines = await highlightCode(source, 'bash');
        if (current) highlightedLines = lines;
      })
      .catch(() => {
        if (current) highlightedLines = undefined;
      });
    return () => {
      current = false;
    };
  });
<\/script>

<div class="example-stack log-panel-recipe">
  <div class="example-controls">
    <Checkbox bind:checked={wrap}>{'Wrap long logs'}</Checkbox>
    <Button size="sm" variant="secondary" onclick={() => (errorsOnly = !errorsOnly)}>
      {errorsOnly ? 'Show all logs' : 'Show errors only'}
    </Button>
  </div>
  <CodeBlock
    {code}
    language="bash"
    label={errorsOnly ? 'Error log' : 'Execution log'}
    {wrap}
    lineNumbers
    copyLabel={'Copy displayed log'}
    copiedLabel={'Log copied'}
    copyErrorLabel={'Unable to copy log'}
    {highlightedLines}
  />
</div>

<small aria-live="polite">{code.split('\\n').length}{' lines'}</small>

<style>
  .log-panel-recipe {
    inline-size: min(100%, 48rem);
  }

  .example-stack {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: start;
    gap: var(--soya-space-4);
    inline-size: min(100%, 32rem);
    min-inline-size: 0;
  }

  .example-controls {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: var(--soya-space-3);
    padding: var(--soya-space-3);
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .example-controls > :global(*) {
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  .example-controls :global(.soya-check) {
    align-items: center;
    min-block-size: var(--soya-control-height);
  }
</style>
`},"scroll-to-top":{ko:`<script lang="ts">
  import { Button } from 'soya-ui';

  let entries = $derived(
    Array.from({ length: 24 }, (_, index) => ({
      id: index + 1,
      title: \`\${index + 1}단계 예제 결과\`,
      description:
        index % 5 === 0
          ? '기관별 권한과 매우 긴 문서 경로를 비교한 상세 결과입니다.'
          : '로컬 검증 결과를 확인했습니다.',
    })),
  );
  let region: HTMLElement;
  let movedToTop = $state(false);

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    region.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    region.focus({ preventScroll: true });
    movedToTop = true;
  }
<\/script>

<div class="scroll-top-recipe">
  <section bind:this={region} class="result-scroll" tabindex="-1" aria-label={'긴 예제 결과'}>
    <h3>{'검증 결과'}</h3>
    <ol>
      {#each entries as entry (entry.id)}
        <li><strong>{entry.title}</strong><span>{entry.description}</span></li>
      {/each}
    </ol>
    <Button variant="secondary" onclick={scrollToTop}>{'결과 처음으로 이동'}</Button>
  </section>
</div>

<small aria-live="polite">
  {movedToTop ? '결과 영역의 처음으로 이동했습니다.' : '목록을 탐색하세요.'}
</small>

<style lang="scss">
  .scroll-top-recipe {
    inline-size: min(100%, 42rem);
  }
  .result-scroll {
    max-block-size: 18rem;
    padding: var(--soya-space-4);
    overflow: auto;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .result-scroll:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--soya-focus-ring-color, var(--soya-focus)) 32%, transparent);
    outline-offset: 2px;
  }
  ol {
    display: grid;
    gap: var(--soya-space-3);
    margin: 0;
    padding-inline-start: var(--soya-space-6);
  }
  li {
    display: grid;
    min-inline-size: 0;
  }
  li span {
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`,en:`<script lang="ts">
  import { Button } from 'soya-ui';

  let entries = $derived(
    Array.from({ length: 24 }, (_, index) => ({
      id: index + 1,
      title: \`Sample result — step \${index + 1}\`,
      description:
        index % 5 === 0
          ? 'Detailed result comparing organization permissions and a very long document path.'
          : 'The local validation result was verified.',
    })),
  );
  let region: HTMLElement;
  let movedToTop = $state(false);

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    region.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    region.focus({ preventScroll: true });
    movedToTop = true;
  }
<\/script>

<div class="scroll-top-recipe">
  <section
    bind:this={region}
    class="result-scroll"
    tabindex="-1"
    aria-label={'Long sample results'}
  >
    <h3>{'Validation results'}</h3>
    <ol>
      {#each entries as entry (entry.id)}
        <li><strong>{entry.title}</strong><span>{entry.description}</span></li>
      {/each}
    </ol>
    <Button variant="secondary" onclick={scrollToTop}>{'Move to the start of results'}</Button>
  </section>
</div>

<small aria-live="polite">
  {movedToTop ? 'Moved to the start of the results region.' : 'Browse the list.'}
</small>

<style lang="scss">
  .scroll-top-recipe {
    inline-size: min(100%, 42rem);
  }
  .result-scroll {
    max-block-size: 18rem;
    padding: var(--soya-space-4);
    overflow: auto;
    border: 1px solid var(--soya-border);
    border-radius: var(--soya-radius-md);
    background: var(--soya-surface);
  }
  .result-scroll:focus-visible {
    outline: 3px solid
      color-mix(in srgb, var(--soya-focus-ring-color, var(--soya-focus)) 32%, transparent);
    outline-offset: 2px;
  }
  ol {
    display: grid;
    gap: var(--soya-space-3);
    margin: 0;
    padding-inline-start: var(--soya-space-6);
  }
  li {
    display: grid;
    min-inline-size: 0;
  }
  li span {
    color: var(--soya-text-secondary);
    overflow-wrap: anywhere;
  }
</style>
`}},te=i(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack date-recipe svelte-15m1zzk"><div class="preset-row svelte-15m1zzk" role="group"><!> <!></div> <div class="date-fields svelte-15m1zzk"><!> <!></div></div></div> <div class="example-feedback"><small aria-live="polite"><strong> </strong> </small> <small class="example-feedback-note"> </small></div></div>`);function ne(e,i){n(i,!0);let a=f(i,`locale`,3,`ko`);function c(e,t){return a()===`en`?t:e}let d=x(()=>[{id:`week`,label:c(`최근 7일`,`Last 7 days`),start:`2026-09-17`,end:`2026-09-23`},{id:`month`,label:c(`최근 30일`,`Last 30 days`),start:`2026-08-25`,end:`2026-09-23`},{id:`current-month`,label:c(`이번 달`,`This month`),start:`2026-09-01`,end:`2026-09-23`}]),v={start:`2026-09-17`,end:`2026-09-23`},b=g(m(v.start)),S=g(m(v.end)),C=x(()=>!!(o(b)&&o(S)&&o(b)>o(S))),w=x(()=>o(d).find(e=>e.start===o(b)&&e.end===o(S))?.id??`custom`),T=x(()=>o(d).find(e=>e.id===o(w))?.label??c(`직접 입력`,`Custom range`));function D(e){O(b,e.start,!0),O(S,e.end,!0)}function k(){O(b,v.start,!0),O(S,v.end,!0)}var j=te(),N=p(j),I=p(N),L=p(I),R=p(L);r(R,17,()=>o(d),e=>e.id,(e,t)=>{{let n=x(()=>o(w)===o(t).id?`primary`:`secondary`),r=x(()=>o(w)===o(t).id);M(e,{size:`sm`,get variant(){return o(n)},get"aria-pressed"(){return o(r)},onclick:()=>D(o(t)),children:(e,n)=>{y();var r=A();h(()=>s(r,o(t).label)),l(e,r)},$$slots:{default:!0}})}});var z=E(R,2);M(z,{size:`sm`,variant:`ghost`,onclick:k,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>c(`기간 초기화`,`Reset range`)]),l(e,n)},$$slots:{default:!0}}),t(L);var B=E(L,2),V=p(B);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=x(()=>i()||o(C));P(e,{get id(){return n()},type:`date`,get"aria-describedby"(){return r()},get invalid(){return o(t)},required:!0,get value(){return o(b)},set value(e){O(b,e,!0)}})}},t=x(()=>c(`시작일`,`Start date`)),n=x(()=>o(C)?c(`시작일은 종료일보다 늦을 수 없습니다.`,`Start date cannot be later than end date.`):void 0);F(V,{get label(){return o(t)},required:!0,get error(){return o(n)},children:e,$$slots:{default:!0}})}var H=E(V,2);{let e=(e,t)=>{let n=()=>(t?.()).id,r=()=>(t?.()).describedBy,i=()=>(t?.()).invalid;{let t=x(()=>i()||o(C));P(e,{get id(){return n()},type:`date`,get"aria-describedby"(){return r()},get invalid(){return o(t)},required:!0,get value(){return o(S)},set value(e){O(S,e,!0)}})}},t=x(()=>c(`종료일`,`End date`));F(H,{get label(){return o(t)},required:!0,children:e,$$slots:{default:!0}})}t(B),t(I),t(N);var U=E(N,2),W=p(U),G=p(W),K=p(G,!0);t(G);var q=E(G);t(W);var J=E(W,2),Y=p(J);t(J),t(U),t(j),h((e,t,n)=>{_(L,`aria-label`,e),s(K,t),s(q,` · ${o(b)??``} → ${o(S)??``}`),s(Y,`${n??``}: 2026-09-23`)},[()=>c(`기간 프리셋`,`Date range presets`),()=>o(C)?c(`날짜 순서를 확인하세요`,`Check the date order`):o(T),()=>c(`예제 기준일`,`Sample reference date`)]),l(e,j),u()}var re=i(`<div class="date-picker-recipe svelte-1g28qx3"><!> <small aria-live="polite" class="svelte-1g28qx3"> </small></div>`);function ie(e,r){n(r,!0);let i=f(r,`locale`,3,`ko`);function a(e,t){return i()===`en`?t:e}let c=g(!1),d=g(m(new Date(2026,8,24))),_=x(()=>o(d)instanceof Date?new Intl.DateTimeFormat(a(`ko-KR`,`en-US`),{year:`numeric`,month:`long`,day:`numeric`}).format(o(d)):a(`날짜를 선택하세요`,`Choose a date`));var b=re(),S=p(b);V(S,{align:`start`,get open(){return o(c)},set open(e){O(c,e,!0)},trigger:(e,t=v)=>{{let n=x(()=>a(`날짜 선택`,`Choose date`));M(e,T(t,{variant:`secondary`,get"aria-label"(){return o(n)},children:(e,t)=>{y();var n=A();h(()=>s(n,o(_))),l(e,n)},$$slots:{default:!0}}))}},children:(e,t)=>{{let t=x(()=>a(`ko-KR`,`en-US`)),n=x(()=>a(`예약 날짜`,`Reservation date`)),r=x(()=>a(`이전 달`,`Previous month`)),i=x(()=>a(`다음 달`,`Next month`));K(e,{mode:`single`,get locale(){return o(t)},get label(){return o(n)},get previousMonthLabel(){return o(r)},get nextMonthLabel(){return o(i)},onvaluechange:e=>{e instanceof Date&&O(c,!1)},get value(){return o(d)},set value(e){O(d,e,!0)}})}},$$slots:{trigger:!0,default:!0}});var C=E(S,2),w=p(C);t(C),t(b),h(e=>s(w,`${e??``}: ${o(_)??``}`),[()=>a(`선택한 날짜`,`Selected date`)]),l(e,b),u()}var ae=i(`<span><strong> </strong><small class="svelte-1hhllpw"> </small></span> <!>`,1),oe=i(`<div class="confirm-actions svelte-1hhllpw" role="group"><!> <!></div>`),se=i(`<!> <!>`,1),ce=i(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack inline-confirm-recipe svelte-1hhllpw"><!></div></div> <div class="example-feedback"><small class="example-feedback-note svelte-1hhllpw"><strong> </strong> <strong>AlertDialog:</strong> </small></div></div>`);function le(r,i){n(i,!0);let c=f(i,`locale`,3,`ko`);function d(e,t){return c()===`en`?t:e}let m=g(!1),v=g(!1),S;async function w(e){await a(),S.querySelector(`[data-inline-action="${e}"]`)?.focus()}async function T(){O(m,!0),await w(`cancel`)}async function D(){O(m,!1),await w(`delete`)}async function k(){O(v,!0),O(m,!1),await w(`restore`)}async function j(){O(v,!1),await w(`delete`)}var N=ce(),P=p(N),F=p(P),I=p(F),L=e=>{{let t=e=>{M(e,{"data-inline-action":`restore`,size:`sm`,variant:`secondary`,onclick:j,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>d(`복원`,`Restore`)]),l(e,n)},$$slots:{default:!0}})},n=x(()=>d(`예제 작업을 제거했습니다`,`Sample job removed`)),r=x(()=>d(`실제 API나 외부 데이터는 변경하지 않았습니다.`,`No real API or external data was changed.`));B(e,{get title(){return o(n)},get description(){return o(r)},actions:t,$$slots:{actions:!0}})}},V=n=>{var r=se(),i=C(r);R(i,{class:`job-row`,padding:`compact`,children:(n,r)=>{var i=ae(),a=C(i),c=p(a),u=p(c,!0);t(c);var f=E(c),g=p(f);t(f),t(a);var _=E(a,2),v=e=>{M(e,{"data-inline-action":`delete`,size:`sm`,variant:`danger`,onclick:T,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>d(`삭제`,`Delete`)]),l(e,n)},$$slots:{default:!0}})};e(_,e=>{o(m)||e(v)}),h((e,t)=>{s(u,e),s(g,`run-1048 · ${t??``}`)},[()=>d(`검색 색인 검증`,`Search index validation`),()=>d(`로컬 예제 데이터`,`local sample data`)]),l(n,i)},$$slots:{default:!0}});var a=E(i,2),c=e=>{{let n=x(()=>d(`이 작업을 목록에서 제거할까요?`,`Remove this job from the list?`)),r=x(()=>d(`현재 행의 맥락을 유지한 채 한 번 더 확인합니다.`,`Confirm once more while keeping the current row in context.`));z(e,{tone:`warning`,get title(){return o(n)},get description(){return o(r)},children:(e,n)=>{var r=oe(),i=p(r);M(i,{"data-inline-action":`cancel`,size:`sm`,variant:`secondary`,onclick:D,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>d(`취소`,`Cancel`)]),l(e,n)},$$slots:{default:!0}});var a=E(i,2);M(a,{size:`sm`,variant:`danger`,onclick:k,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>d(`제거 확인`,`Confirm removal`)]),l(e,n)},$$slots:{default:!0}}),t(r),h(e=>_(r,`aria-label`,e),[()=>d(`예제 작업 삭제 확인`,`Confirm sample job deletion`)]),l(e,r)},$$slots:{default:!0}})}};e(a,e=>{o(m)&&e(c)}),l(n,r)};e(I,e=>{o(v)?e(L):e(V,-1)}),t(F),b(F,e=>S=e,()=>S),t(P);var H=E(P,2),U=p(H),W=p(U),G=p(W,!0);t(W);var K=E(W),q=E(K,2);t(U),t(H),t(N),h((e,t,n)=>{s(G,e),s(K,` ${t??``} `),s(q,` ${n??``}`)},[()=>d(`행 안에서 확인:`,`Inline:`),()=>d(`현재 행을 계속 보면서 확인합니다.`,`Confirm while keeping the current row visible.`),()=>d(`배경 상호작용을 막고 결정에 포커스를 모아야 할 때 사용합니다.`,`Use it when background interaction must stop and focus should remain on the decision.`)]),l(r,N),u()}var ue=i(`<span class="svelte-jpfj1b"><strong class="svelte-jpfj1b"> </strong><small class="svelte-jpfj1b"> </small></span>`),de=i(`<nav class="job-list svelte-jpfj1b"></nav>`),fe=i(`<section class="job-detail svelte-jpfj1b" aria-live="polite"><h3 class="svelte-jpfj1b"> </h3> <!></section>`),pe=i(`<h3 id="job-list-heading"> </h3> <!>`,1),me=i(`<h3 id="job-detail-heading"> </h3> <!>`,1),he=i(`<div class="example-stack job-detail-recipe svelte-jpfj1b"><!> <!></div>`);function ge(e,n){let i=e=>{var n=de();r(n,21,()=>o(m),e=>e.id,(e,n)=>{{let r=x(()=>o(v)===o(n).id?`primary`:`ghost`),i=x(()=>o(v)===o(n).id);M(e,{get variant(){return o(r)},get"aria-pressed"(){return o(i)},onclick:()=>O(v,o(n).id,!0),children:(e,r)=>{var i=ue(),a=p(i),c=p(a,!0);t(a);var u=E(a),d=p(u);t(u),t(i),h(()=>{s(c,o(n).name),s(d,`run-${o(n).id??``} · ${o(n).owner??``}`)}),l(e,i)},$$slots:{default:!0}})}}),t(n),h(e=>_(n,`aria-label`,e),[()=>d(`예제 작업`,`Sample jobs`)]),l(e,n)},a=e=>{{let t=x(()=>o(b).status===`ready`?`success`:`neutral`);L(e,{get tone(){return o(t)},children:(e,t)=>{y();var n=A();h(()=>s(n,o(b).statusLabel)),l(e,n)},$$slots:{default:!0}})}},c=e=>{var n=fe(),r=p(n),i=p(r,!0);t(r);var c=E(r,2);{let e=x(()=>d(`${o(b).name} 상세`,`${o(b).name} details`)),t=x(()=>[{term:d(`실행 ID`,`Run ID`),value:`run-${o(b).id}`},{term:d(`상태`,`Status`),value:a},{term:d(`담당자`,`Owner`),value:o(b).owner},{term:d(`범위`,`Scope`),value:o(b).scope}]);H(c,{get label(){return o(e)},columns:1,get items(){return o(t)}})}t(n),h(()=>s(i,o(b).name)),l(e,n)},u=f(n,`locale`,3,`ko`);function d(e,t){return u()===`en`?t:e}let m=x(()=>[{id:`1048`,name:d(`검색 색인 검증`,`Search index validation`),owner:d(`민지`,`Minji`),status:`ready`,statusLabel:d(`준비됨`,`Ready`),scope:`Wiki · Post · Comment`},{id:`1047`,name:d(`기관별 권한 스냅샷 비교`,`Compare organization permission snapshots`),owner:d(`서준`,`Seojun`),status:`running`,statusLabel:d(`실행 중`,`Running`),scope:d(`42개 기관`,`42 organizations`)},{id:`1046`,name:d(`매우 긴 프로젝트 이름의 문서와 첨부 파일 접근 경로 정합성 확인`,`Validate document and attachment paths for a project with a very long name`),owner:d(`지우`,`Jiwoo`),status:`queued`,statusLabel:d(`대기`,`Queued`),scope:`Files · Links`}]),v=g(`1048`),b=x(()=>o(m).find(e=>e.id===o(v))??o(m)[0]);var S=he(),w=p(S);R(w,{class:`job-panel`,padding:`compact`,role:`region`,"aria-labelledby":`job-list-heading`,children:(e,n)=>{var r=pe(),a=C(r),o=p(a,!0);t(a);var c=E(a,2);i(c),h(e=>s(o,e),[()=>d(`작업 선택`,`Job selection`)]),l(e,r)},$$slots:{default:!0}});var T=E(w,2);R(T,{class:`job-panel`,padding:`compact`,role:`region`,"aria-labelledby":`job-detail-heading`,children:(e,n)=>{var r=me(),i=C(r),a=p(i,!0);t(i);var o=E(i,2);c(o),h(e=>s(a,e),[()=>d(`작업 상세`,`Job details`)]),l(e,r)},$$slots:{default:!0}}),t(S),l(e,S)}var _e=i(`<span class="svelte-gqhmp4"> </span><!>`,1),ve=i(`<li class="svelte-gqhmp4"><!></li>`),ye=i(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack load-more-recipe svelte-gqhmp4"><ul class="svelte-gqhmp4"></ul> <!></div></div> <div class="example-feedback"><small aria-live="polite"> </small></div></div>`);function $(i,a){n(a,!0);let c=f(a,`locale`,3,`ko`);function d(e,t){return c()===`en`?t:e}let m=x(()=>[d(`검색 색인 검증`,`Search index validation`),d(`기관별 권한 스냅샷 비교`,`Compare organization permission snapshots`),d(`통합 검색 재현`,`Reproduce unified search`),d(`Wiki 문서 샘플링`,`Sample wiki documents`),d(`댓글 관계 점검`,`Check comment relationships`),d(`파일 접근 경로 확인`,`Verify file access paths`),d(`긴 이름의 엔터프라이즈 프로젝트 검색 결과 정합성 확인`,`Validate search results for an enterprise project with a long name`)]),v=g(3),b=g(!1),w,T=x(()=>o(m).slice(0,o(v))),D=x(()=>o(v)<o(m).length?`cursor-${o(v)}`:void 0);function k(){!o(b)&&o(D)&&(O(b,!0),w=setTimeout(()=>{O(v,Math.min(o(m).length,o(v)+2),!0),O(b,!1)},500))}function j(){w&&clearTimeout(w),O(v,3),O(b,!1)}S(()=>{w&&clearTimeout(w)});var N=ye(),P=p(N),F=p(P),I=p(F);r(I,23,()=>o(T),(e,t)=>`${t}-${e}`,(e,n,r)=>{var i=ve(),a=p(i);R(a,{padding:`compact`,children:(e,i)=>{var a=_e(),c=C(a),u=p(c,!0);t(c);var d=E(c);L(d,{tone:`neutral`,children:(e,t)=>{y();var n=A();h(()=>s(n,`#${o(r)+1}`)),l(e,n)},$$slots:{default:!0}}),h(()=>s(u,o(n))),l(e,a)},$$slots:{default:!0}}),t(i),l(e,i)}),t(I);var z=E(I,2),V=e=>{M(e,{get loading(){return o(b)},get disabled(){return o(b)},onclick:k,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>o(b)?d(`다음 결과를 불러오는 중`,`Loading more results`):d(`결과 더 보기`,`Load more results`)]),l(e,n)},$$slots:{default:!0}})},H=e=>{{let t=e=>{M(e,{size:`sm`,variant:`secondary`,onclick:j,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>d(`예제 초기화`,`Reset example`)]),l(e,n)},$$slots:{default:!0}})},n=x(()=>d(`모든 결과를 불러왔습니다`,`All results loaded`)),r=x(()=>d(`다음 페이지를 가리키는 값이 없으면 추가 요청을 보내지 않습니다.`,`No additional request is sent without a cursor.`));B(e,{get title(){return o(n)},get description(){return o(r)},actions:t,$$slots:{actions:!0}})}};e(z,e=>{o(D)?e(V):e(H,-1)}),t(F),t(P);var U=E(P,2),W=p(U),G=p(W);t(W),t(U),t(N),h((e,t,n)=>{_(I,`aria-label`,e),s(G,`${t??``} ${n??``}`)},[()=>d(`예제 작업 결과`,`Sample job results`),()=>d(`다음 커서:`,`Next cursor:`),()=>o(D)??d(`없음`,`None`)]),l(i,N),u()}var be=i(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="example-stack log-panel-recipe svelte-nvrv2l"><div class="example-controls"><!> <!></div> <!></div></div> <div class="example-feedback"><small aria-live="polite"> </small> <small class="example-feedback-note"> </small></div></div>`);function xe(e,r){n(r,!0);let i=f(r,`locale`,3,`ko`);function a(e,t){return i()===`en`?t:e}let c=[`14:32:08 INFO  fixture run-1048 started`,`14:32:09 INFO  loaded 1,240 searchable records`,`14:32:10 WARN  institution alpha returned a delayed snapshot`,`14:32:11 INFO  permission comparison completed`,`14:32:12 ERROR sample document path was not found`,`14:32:13 INFO  fixture run finished with 1 warning and 1 sampled error`],d=g(!1),m=g(!1),_=x(()=>c.filter(e=>!o(m)||e.includes(`ERROR`)).join(`
`)),v=g(void 0);D(()=>{let e=o(_),t=!0;return j(async()=>{let{highlightCode:e}=await import(`../chunks/BDhWHrEw.js`);return{highlightCode:e}},__vite__mapDeps([0,1]),import.meta.url).then(async({highlightCode:n})=>{let r=await n(e,`bash`);t&&O(v,r,!0)}).catch(()=>{t&&O(v,void 0)}),()=>{t=!1}});var b=be(),S=p(b),C=p(S),w=p(C),T=p(w);I(T,{get checked(){return o(d)},set checked(e){O(d,e,!0)},children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>a(`긴 로그 줄바꿈`,`Wrap long logs`)]),l(e,n)},$$slots:{default:!0}});var k=E(T,2);M(k,{size:`sm`,variant:`secondary`,onclick:()=>O(m,!o(m)),children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>o(m)?a(`전체 로그 보기`,`Show all logs`):a(`오류만 보기`,`Show errors only`)]),l(e,n)},$$slots:{default:!0}}),t(w);var N=E(w,2);{let e=x(()=>o(m)?a(`오류 로그`,`Error log`):a(`실행 로그`,`Execution log`)),t=x(()=>a(`표시한 로그 복사`,`Copy displayed log`)),n=x(()=>a(`로그 복사됨`,`Log copied`)),r=x(()=>a(`로그를 복사할 수 없음`,`Unable to copy log`));G(N,{get code(){return o(_)},language:`bash`,get label(){return o(e)},get wrap(){return o(d)},lineNumbers:!0,get copyLabel(){return o(t)},get copiedLabel(){return o(n)},get copyErrorLabel(){return o(r)},get highlightedLines(){return o(v)}})}t(C),t(S);var P=E(S,2),F=p(P),L=p(F);t(F);var R=E(F,2),z=p(R,!0);t(R),t(P),t(b),h((e,t,n)=>{s(L,`${e??``}${t??``}`),s(z,n)},[()=>o(_).split(`
`).length,()=>a(`줄`,` lines`),()=>a(`서버를 호출하지 않는 로컬 예제 데이터`,`Local sample data without server calls`)]),l(e,b),u()}var Se=i(`<li class="svelte-1g2270s"><strong> </strong><span class="svelte-1g2270s"> </span></li>`),Ce=i(`<div class="example-feedback-layout"><div class="example-preview-main"><div class="scroll-top-recipe svelte-1g2270s"><section class="result-scroll svelte-1g2270s" tabindex="-1"><h3> </h3> <ol class="svelte-1g2270s"></ol> <!></section></div></div> <div class="example-feedback"><small aria-live="polite"> </small> <small class="example-feedback-note"> <kbd>Tab</kbd> <kbd>Enter</kbd></small></div></div>`);function we(e,i){n(i,!0);let a=f(i,`locale`,3,`ko`);function c(e,t){return a()===`en`?t:e}let d=x(()=>Array.from({length:24},(e,t)=>({id:t+1,title:c(`${t+1}단계 예제 결과`,`Sample result — step ${t+1}`),description:t%5==0?c(`기관별 권한과 매우 긴 문서 경로를 비교한 상세 결과입니다.`,`Detailed result comparing organization permissions and a very long document path.`):c(`로컬 검증 결과를 확인했습니다.`,`The local validation result was verified.`)}))),m,v=g(!1);function S(){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;m.scrollTo({top:0,behavior:e?`auto`:`smooth`}),m.focus({preventScroll:!0}),O(v,!0)}var C=Ce(),w=p(C),T=p(w),D=p(T),k=p(D),j=p(k,!0);t(k);var N=E(k,2);r(N,21,()=>o(d),e=>e.id,(e,n)=>{var r=Se(),i=p(r),a=p(i,!0);t(i);var c=E(i),u=p(c,!0);t(c),t(r),h(()=>{s(a,o(n).title),s(u,o(n).description)}),l(e,r)}),t(N);var P=E(N,2);M(P,{variant:`secondary`,onclick:S,children:(e,t)=>{y();var n=A();h(e=>s(n,e),[()=>c(`결과 처음으로 이동`,`Move to the start of results`)]),l(e,n)},$$slots:{default:!0}}),t(D),b(D,e=>m=e,()=>m),t(T),t(w);var F=E(w,2),I=p(F),L=p(I,!0);t(I);var R=E(I,2),z=p(R),B=E(z,2);y(),t(R),t(F),t(C),h((e,t,n,r,i)=>{_(D,`aria-label`,e),s(j,t),s(L,n),s(z,`${r??``}: `),s(B,` ${i??``} `)},[()=>c(`긴 예제 결과`,`Long sample results`),()=>c(`검증 결과`,`Validation results`),()=>o(v)?c(`결과 영역의 처음으로 이동했습니다.`,`Moved to the start of the results region.`):c(`목록을 탐색하세요.`,`Browse the list.`),()=>c(`키보드`,`Keyboard`),()=>c(`후`,`then`)]),l(e,C),u()}var Te={"date-picker":{component:ie,source:Q[`date-picker`]},"date-range-filter":{component:ne,source:Q[`date-range-filter`]},"inline-confirm":{component:le,source:Q[`inline-confirm`]},"job-list-detail":{component:ge,source:Q[`job-list-detail`]},"load-more":{component:$,source:Q[`load-more`]},"log-panel":{component:xe,source:Q[`log-panel`]},"scroll-to-top":{component:we,source:Q[`scroll-to-top`]}},Ee=i(`<meta name="description"/>`),De=i(`<li class="svelte-1jxnhfq"> </li>`),Oe=i(`<section id="example" class="doc-section svelte-1jxnhfq"><h2> </h2> <p class="section-copy"> </p> <!></section> <section id="guidance" class="doc-section guidance-grid svelte-1jxnhfq"><div class="svelte-1jxnhfq"><h2> </h2> <p class="svelte-1jxnhfq"> </p></div> <div class="svelte-1jxnhfq"><h2> </h2> <ul class="svelte-1jxnhfq"></ul></div></section>`,1);function ke(e,i){n(i,!0);let a=N(),c=x(()=>W.find(e=>e.slug===i.data.slug)),f=x(()=>U(o(c),a.locale)),m=x(()=>Te[i.data.slug]),g=[{id:`example`,ko:`동작 예제`,en:`Live recipe`},{id:`guidance`,ko:`적용 기준`,en:`Guidance`}],v=x(()=>[{label:a.t(`가이드`,`Guides`)},{label:a.t(`패턴`,`Patterns`),href:`/patterns`},{label:o(f).title,current:!0}]);k(`1jxnhfq`,e=>{var t=Ee();h(()=>_(t,`content`,o(f).description)),d(()=>{w.title=`${o(f).title??``} — Soya UI`}),l(e,t)}),Y(e,{get title(){return o(f).title},get description(){return o(f).description},get toc(){return g},get breadcrumbs(){return o(v)},children:(e,n)=>{var i=Oe(),c=C(i),u=p(c),d=p(u,!0);t(u);var g=E(u,2),_=p(g,!0);t(g);var v=E(g,2);q(v,{get component(){return o(m).component},get source(){return o(m).source},get name(){return o(f).title},get locale(){return a.locale}}),t(c);var y=E(c,2),b=p(y),x=p(b),S=p(x,!0);t(x);var w=E(x,2),T=p(w,!0);t(w),t(b);var D=E(b,2),O=p(D),k=p(O,!0);t(O);var A=E(O,2);r(A,20,()=>o(f).options,e=>e,(e,n)=>{var r=De(),i=p(r,!0);t(r),h(()=>s(i,n)),l(e,r)}),t(A),t(D),t(y),h((e,t,n,r)=>{s(d,e),s(_,t),s(S,n),s(T,o(f).useWhen),s(k,r)},[()=>a.t(`동작 예제`,`Live recipe`),()=>a.t(`동작하는 조합을 확인하고, 선택한 언어의 예제 코드를 복사해 사용하세요.`,`Review the working composition and copy the example code in your selected language.`),()=>a.t(`적용 기준`,`Use when`),()=>a.t(`구성 방식`,`Composition choices`)]),l(e,i)},$$slots:{default:!0}}),u()}export{ke as component,X as universal};