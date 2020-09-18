<template>
    <div>
        <div class="el-number-header">
            <slot name="number-header"></slot>
        </div>
        <div class="el-contain-section">
            <slot name="contain-section">
            </slot>
        </div>
        <el-divider></el-divider>
        <div class="el-number-footer">
            <slot name="number-footer">
            </slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .el-number-header {
        word-break: break-all;
        white-space: nowrap;
        color: #000;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .el-number-footer {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .el-divider--horizontal {
        margin: 24px 0 10px 0;
    }
</style>