"""changes

Revision ID: 400973a9787b
Revises: cc42b8d40867
Create Date: 2024-07-05 12:50:18.251899

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '400973a9787b'
down_revision = 'cc42b8d40867'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('menus', schema=None) as batch_op:
        batch_op.add_column(sa.Column('category_name', sa.String(length=100), nullable=True))
        batch_op.drop_column('name')
        batch_op.drop_column('description')
        batch_op.drop_column('price')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('menus', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('description', mysql.VARCHAR(length=255), nullable=False))
        batch_op.add_column(sa.Column('name', mysql.VARCHAR(length=100), nullable=True))
        batch_op.drop_column('category_name')

    # ### end Alembic commands ###
